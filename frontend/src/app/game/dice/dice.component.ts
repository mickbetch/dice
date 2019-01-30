import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})

export class DiceComponent implements OnInit {
  winChance = 16.67;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.winChanceChanged.next(this.winChance);
  }

  toggleActiveDice(event) {
    const dices = document.body.querySelectorAll('.dice .dice-item');
    const activeDices = document.body.querySelectorAll('.dice .dice-item.active');
    if (activeDices.length < dices.length - 1) {
      if (event.target.classList.contains('active') && activeDices.length !== 1) {
        event.target.classList.remove('active');
      } else {
        event.target.classList.add('active');
      }
    } else if (activeDices.length == dices.length - 1) {
      event.target.classList.remove('active');
    }

    this.changeWinChance();
    this.gameService.winChanceChanged.next(this.winChance);
  }

  changeWinChance() {
    const dices = document.body.querySelectorAll('.dice .dice-item');
    const activeDices = document.body.querySelectorAll('.dice .dice-item.active');
    this.winChance = +((activeDices.length / dices.length) * 100).toFixed(2);
  }
}
