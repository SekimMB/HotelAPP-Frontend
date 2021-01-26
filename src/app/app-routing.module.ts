import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/client-components/register/register.component';
import {LoginComponent} from './components/client-components/login/login.component';
import {RegisterSuccessComponent} from './components/client-components/register-success/register-success.component';
import {RoomComponent} from './components/room-components/room/room.component';
import {ReservationSuccessComponent} from './components/reservation-components/reservation-success/reservation-success.component';
import {ReservationComponent} from './components/reservation-components/reservation/reservation.component';
import {AccountComponent} from './components/client-components/account/account.component';
import {AccountReservationsComponent} from './components/client-components/account-reservations/account-reservations.component';
import {AuthGuard} from './auth.guard';
import {AccountUpdateComponent} from './components/client-components/account-update/account-update.component';

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
    component: RegisterSuccessComponent,

  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'reservation/success',
    component: ReservationSuccessComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'account-reservations',
    component: AccountReservationsComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'account-update',
    component: AccountUpdateComponent,
    canActivate : [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
