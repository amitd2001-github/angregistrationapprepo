import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Local } from 'protractor/built/driverProviders';
import { Login } from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements OnInit {

  //remote url
  userurl:string = 'http://localhost:8899/user';

  loginurl:string = 'http://localhost:8899/login';

  //checkloginurl = 'http://localhost:8899/checklogin/Sandeep/sanjose';
  checkloginurl = 'http://localhost:8899/checklogin/';

  //deleteuser:string = 'http://localhost:8899/user/4'

  //headers:Headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  
  constructor(private httpservice: HttpClient) { }

  ngOnInit(){
    
  }

  data: Object | undefined;

  //Http Post User
  RegisterNewUser(body:any): any{
  console.log("inside RegisterNewUser() of RegistrationService");
  const headers = { 
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   }
  this.httpservice.post<any>(this.userurl,
    JSON.stringify(body),{'headers':headers})
  .subscribe((data: Object | undefined) => {
    this.data = data;
    //this.loading = false;
  });
}

//Http Get Login
CheckCredentials(username:string,password:string):Observable<Login>{
  console.log("inside CheckCredentials() of RegistrationService");
  const headers = { 
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   }
   return this.httpservice.get<Login>(this.checkloginurl + username + "/" + password,
  {'headers':headers});
  /*
  .subscribe((data: Object | undefined) => {
    this.data = data;
    
  });*/

}

//Http Get all Users
GetAllRegisteredUsers():Observable<Array<User>>{
  console.log("inside GetAllRegisteredUsers() of RegistrationService");
  const headers = { 
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   }
  return this.httpservice.get<any>(this.userurl,
  {'headers':headers});
  /*
  .subscribe((data: Object | undefined) => {
    this.data = data;
    //this.loading = false;
  });*/
}

//Http Delete User
DeleteRegisteredUser(id:number):any{
  console.log("inside DeleteRegisteredUser() of RegistrationService " + this.userurl+"/"+id);
  const headers = { 
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   }
   this.httpservice.delete<any>(this.userurl+"/"+id,
    {'headers':headers})
    .subscribe((data: Object | undefined) => {
      this.data = data;
      //this.loading = false;
    });
}

}
