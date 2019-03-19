import { Injectable } from '@angular/core';
import { Game } from '../class/Game';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class GameListService {
  
  private gameList: Array<Game> = [
    new Game(1,"FFX", 'asda'),
    new Game(2,"Fifa 2019", 'gioco calcio')
  ];

  constructor() { }

  getList(){
  return this.gameList;
  }

  getGame(value : number):Game{
    return this.gameList.find(item =>{
        return item.id === value;
    })
  }

}
