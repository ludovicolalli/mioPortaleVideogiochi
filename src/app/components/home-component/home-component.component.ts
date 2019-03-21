import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  
  constructor() { }
  nome: string;
  password: string;
  ngOnInit() {
    this.nome = sessionStorage.getItem('user');
    this.password = sessionStorage.getItem('pwd');
  }

}
