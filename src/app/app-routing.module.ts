import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {
    path : ' ', component: HeaderComponent
  },

 {
   path : 'aboutus', component: AboutusComponent
 },

 {
   path : 'login',  component: LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
