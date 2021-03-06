import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/client-components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/client-components/login/login.component';
import { RegisterSuccessComponent } from './components/client-components/register-success/register-success.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room-components/room/room.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './components/client-components/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationComponent } from './components/reservation-components/reservation/reservation.component';
import { ReservationSuccessComponent } from './components/reservation-components/reservation-success/reservation-success.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMomentDateModule} from '@angular/material-moment-adapter'
import { DatePipe } from '@angular/common';
import { AccountReservationsComponent } from './components/client-components/account-reservations/account-reservations.component';
import { AccountUpdateComponent } from './components/client-components/account-update/account-update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    NavbarComponent,
    HomeComponent,
    RoomComponent,
    AccountComponent,
    ReservationComponent,
    ReservationSuccessComponent,
    AccountReservationsComponent,
    AccountUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatMomentDateModule,
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

