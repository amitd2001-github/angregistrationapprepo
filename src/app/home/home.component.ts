import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FormGroup } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  loggedinname="";
  role="";

  regusers:Array<User>=[];

  constructor(private ar : ActivatedRoute, private registerservice : RegistrationService) 
  { 
    let name=this.ar.snapshot.params['nam'];
    let rol=this.ar.snapshot.params['rol'];
    this.loggedinname = name;
    this.role=rol;
  }

  ngOnInit(): void {
    this.registerservice.GetAllRegisteredUsers().subscribe((data: Array<User>) => {
        this.regusers = data;
    });
  }

  setClickedRow(id: number){
    console.log("inside setClickedRow() " + id);
    this.registerservice.DeleteRegisteredUser(id).subscribe((data: any) => {
      console.log("finally deleted");
      this.ngOnInit();
  });

  }

  updaterusersform = new FormGroup({
  });

}
