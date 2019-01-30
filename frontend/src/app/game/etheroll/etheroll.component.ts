import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-etheroll',
  templateUrl: './etheroll.component.html',
  styleUrls: ['./etheroll.component.scss']
})
export class EtherollComponent implements OnInit {
  winChance = 1;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.winChanceChanged.next(this.winChance);
  }

  onSliderValueChanged() {
    this.gameService.winChanceChanged.next(this.winChance);
  }

  formatLabel(value: number | null) {
    return value + '%';
  }

}
