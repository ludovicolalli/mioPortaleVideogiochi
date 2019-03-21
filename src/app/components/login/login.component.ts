import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { RoutingEnum } from 'src/app/class/Routing-Enum';
import { RouteGuard } from 'src/app/class/RouteGuard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  pwd: string;

  constructor(private router: Router, private routeGuard : RouteGuard) { }

  ngOnInit() {
  }

  login(): void {
    if(this.user.length >= 4 && this.pwd.length >= 4){
      sessionStorage.setItem('user', this.user);
      sessionStorage.setItem('pwd', this.pwd);
      this.router.navigate(['/' + RoutingEnum.home]);
    }
  }

  reset(): void{
    this.user = "";
    this.pwd = "";
  }

}
