import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Observable } from 'rxjs';
import { Login } from '../login';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //data:any;
  loggeduser:Login | undefined;

  roles: Array<String> = ["Admin","Consultant","Contractor"];
  role: string | undefined;

  constructor(private registerservice : RegistrationService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  changeRole(role:any){
    this.role = role.value;
  }

  loginform = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    role : new FormControl('')
  });

  onSubmit(){
    console.log(this.loginform.value);
    alert(JSON.stringify(this.loginform.value.username + this.loginform.value.password));
    
    this.registerservice.CheckCredentials(this.loginform.value.username,this.loginform.value.password)
    .subscribe((data: Login) => {
      this.loggeduser = data;
      console.log(this.loggeduser);
      if(this.loggeduser.authenticated){
        this.router.navigate(['/home',this.loggeduser.username,this.role ]);
      }else{
        this.router.navigate(['/register']);
      }
     });
  }

}
