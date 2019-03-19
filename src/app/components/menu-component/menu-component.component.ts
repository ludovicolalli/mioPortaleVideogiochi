import { Component, OnInit } from '@angular/core';
import { RoutingEnum } from 'src/app/class/Routing-Enum';
import { MenuItem } from 'src/app/class/Menu-Item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {

  menuList: MenuItem[] = [
    {id: 1, descrizione: 'home', selezionato: false, endpoint: '/' + RoutingEnum.home},
    {id: 2, descrizione: 'lista', selezionato: false, endpoint: '/'  + RoutingEnum.lista},
    {id: 3, descrizione: 'modifica', selezionato: false, endpoint: '/' + RoutingEnum.modifica},
    {id: 4, descrizione: 'dettaglio', selezionato: false, endpoint: '/' + RoutingEnum.dettaglio}
  ]

  constructor() { }

  ngOnInit() {
    
  }

}