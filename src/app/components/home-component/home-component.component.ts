import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  
  constructor() { }
  
  nome: string = sessionStorage.getItem('user');
  password: string = sessionStorage.getItem('pwd');
  
  nomeUtente = this.nome;
  
  ngOnInit() {
  }
}
