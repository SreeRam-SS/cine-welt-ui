import { Component, OnInit } from '@angular/core';
import { Eventservice } from "../api.service";
import { Router } from '@angular/router';
interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: '',
    password: '',
  };

  constructor(private eventservice: Eventservice, private router:Router) { }
  ngOnInit(): void {
  }

  submit(){
    console.log(this.login,"Login");
    this.eventservice.loginApi(this.login).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token',res.token);
      this.navigate('/');
    },error => {
      console.log("Error01",error);
    });
  }

  navigate(value:any){
    this.router.navigate([value]);
  }


}
