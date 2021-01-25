import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/client-components/register/register.component';
import {LoginComponent} from './components/client-components/login/login.component';
import {RegisterSuccessComponent} from './components/client-components/register-success/register-success.component';
import {RoomComponent} from './components/room-components/room/room.component';
import {ReservationSuccessComponent} from './components/reservation-components/reservation-success/reservation-success.component';
import {ReservationComponent} from './components/reservation-components/reservation/reservation.component';

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
  {
    path: 'reservation/success',
    component: ReservationSuccessComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
