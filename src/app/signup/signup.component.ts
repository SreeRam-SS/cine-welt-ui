import { Component, OnInit } from '@angular/core';
import { Eventservice } from "../api.service";
import  { Router } from '@angular/router';
interface Register {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})


export class SignupComponent implements OnInit {
  register: Register = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  currentpage = '';
  constructor(private eventservice: Eventservice,private router:Router) {}

  ngOnInit(): void {
    this.currentpage = window.location.href.split('/')[3];
  }

  submit(){
    // console.log(this.register,"Register");
    this.eventservice.registerApi(this.register).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    },error => {
      console.log("Error01",error);
    });
  }

}
