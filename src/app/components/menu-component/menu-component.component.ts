import { Component, OnInit } from '@angular/core';
import { RoutingEnum } from 'src/app/class/Routing-Enum';
import { MenuItem } from 'src/app/class/Menu-Item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {

  menuList: MenuItem[] = [
    {id: 1, descrizione: 'home', selezionato: false, endpoint: '/' + RoutingEnum.home},
    {id: 2, descrizione: 'lista', selezionato: false, endpoint: '/'  + RoutingEnum.lista},
    {id: 3, descrizione: 'dettaglio', selezionato: false, endpoint: '/' + RoutingEnum.dettaglio},  
    {id: 4, descrizione: 'modifica', selezionato: false, endpoint: '/' + RoutingEnum.modifica},
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate([RoutingEnum.login]);
  }

}
