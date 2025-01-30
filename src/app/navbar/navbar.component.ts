import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentpage=""
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentpage=window.location.href.split("/")[3];
  }

  isavailable(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  isLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
