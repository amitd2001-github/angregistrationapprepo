import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

const routes1=
[
    {path:'register',component:RegisterComponent},
    {path:'',component:LoginComponent},
    {path:'home/:nam/:rol',component:HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes1)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
