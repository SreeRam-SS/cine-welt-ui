import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthRedirectionGuard implements CanActivate {
 
  constructor(private router: Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      // Token exists, redirect to dashboard or some other authenticated page
      this.router.navigate(['/']);
      return false;
    } else {
      // Token does not exist, allow access
      return true;
    }
  }
}