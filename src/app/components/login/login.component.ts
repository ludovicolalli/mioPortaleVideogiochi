import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingEnum } from 'src/app/class/Routing-Enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  pwd: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if(this.user.length >= 4 && this.pwd.length >= 4){
      this.router.navigate(['/' + RoutingEnum.home]);
      sessionStorage.setItem('user', this.user);
      
    }
  }

  reset(): void{
    this.user = "";
    this.pwd = "";
  }

}
