import { PlayersComponent } from './components/players/players.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Pages } from './shared/pages';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: Pages.Login, component: LoginComponent},
  { path: Pages.SignUp, component: SignupComponent },
  { path: Pages.Players, component: PlayersComponent },
  { path: Pages.Tournaments, component: TournamentsComponent },
  { path: Pages.Matches, component: MatchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
