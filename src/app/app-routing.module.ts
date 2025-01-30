import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthRedirectionGuard } from './guards/auth-redirection.guard';

const routes: Routes = [
  { path: '', component: MovieListComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent,canActivate: [AuthRedirectionGuard] },
  { path: 'register', component: SignupComponent,canActivate: [AuthRedirectionGuard] },
  { path: 'movie-detail/:title', component: MovieDetailComponent,canActivate: [AuthGuard] },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
