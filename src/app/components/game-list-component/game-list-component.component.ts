import { Component, OnInit } from '@angular/core';
import { GameListService } from 'src/app/services/game-list.service';
import { Game } from 'src/app/class/Game';

@Component({
  selector: 'app-game-list-component',
  templateUrl: './game-list-component.component.html',
  styleUrls: ['./game-list-component.component.scss']
})
export class GameListComponentComponent implements OnInit {
  gameList: Array<Game> 
  constructor(private gameListService: GameListService) {}

  ngOnInit() {
    this.gameList = this.gameListService.getList();
  }

}
