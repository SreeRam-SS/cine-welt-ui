import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router: Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      // Token exists, allow access
      return true;
    } else {
      // Token does not exist, redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }
}