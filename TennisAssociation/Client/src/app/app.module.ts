import { SignupModule } from './components/signup/signup.module';
import { HomeModule } from './components/home/home.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { PlayersModule } from './components/players/players.module';
import { TournamentsModule } from './components/tournaments/tournaments.module';
import { MatchesModule } from './components/matches/matches.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    PlayersModule,
    TournamentsModule,
    MatchesModule,
    NavBarModule, 
    HomeModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
