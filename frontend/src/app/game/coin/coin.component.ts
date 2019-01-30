import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  winChance = 50;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.winChanceChanged.next(this.winChance);
  }
}
