import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/client-components/register/register.component';
import {LoginComponent} from './components/client-components/login/login.component';
import {RegisterSuccessComponent} from './components/client-components/register-success/register-success.component';
import {RoomComponent} from './components/room-components/room/room.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register/success',
    component: RegisterSuccessComponent
  },
  {
    path: 'room',
    component: RoomComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
