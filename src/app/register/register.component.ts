import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedCountry: String = "--Choose Country--";
  selectedState: String = "--Choose Country--";
  selectedCity: String = "--Choose City--";

  Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
		{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
		{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
		{ name: 'India', states: [ {name: 'Maharashtra', cities: ['Pune','Mumbai']},{name: 'Karnataka', cities: ['Bangalore','Sirsi']}] }
  ];
  
  states: Array<any> =[];

	cities: Array<any> =[];


  registrationform = new FormGroup({
    //username : new FormControl('Amit'), //default value
    username : new FormControl('',
              [Validators.required, Validators.minLength(4)]),
    password : new FormControl(''),
    //confirmPassword : new FormControl(''),
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email : new FormControl(''),
    addr : new FormGroup({
      country : new FormControl(''),
      city : new FormControl(''), 
      state : new FormControl('')
      //postalcode : new FormControl('')
    }),
    mobileno : new FormControl('')
});

  constructor(private registerservice : RegistrationService) { }

  ngOnInit(): void {
    //this.registerservice
  }

  changeCountry(country:any) {
    this.selectedCountry = country.value;
    console.log("inside changeCountry: " + this.selectedCountry);
		this.states = this.Countries.find(cntry => cntry.name == this.selectedCountry).states;
	}

	changeState(state:any) {
    this.selectedState = state.value;
    console.log("inside changeState: " + this.selectedState);
    this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).states.find((stat: { name: any; }) => stat.name == this.selectedState).cities;
    console.log("cities of selected state: " + this.cities);
  }
  
  changeCity(city:any) {
		this.selectedCity = city.value;
	}

  onSubmit(){
    console.log(this.registrationform.value);
    alert(JSON.stringify(this.registrationform.value));
    this.registerservice.RegisterNewUser(this.registrationform.value);
  }

}