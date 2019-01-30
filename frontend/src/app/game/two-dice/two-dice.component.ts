import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-two-dice',
  templateUrl: './two-dice.component.html',
  styleUrls: ['./two-dice.component.scss']
})
export class TwoDiceComponent implements OnInit {
  winChance = 2.78;
  chanceTable = {
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 4,
    '6': 5,
    '7': 6,
    '8': 5,
    '9': 4,
    '10': 3,
    '11': 2,
    '12': 1
  };

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.winChanceChanged.next(this.winChance);
  }

  toggleActiveDice(event) {
    const dices = document.body.querySelectorAll('.two-dice .dice-item');
    const activeDices = document.body.querySelectorAll('.two-dice .dice-item.active');
    const self = this;
    if (activeDices.length < dices.length - 1) {
      if (event.target.classList.contains('active') && activeDices.length !== 1) {
        event.target.classList.remove('active');
      } else {
        event.target.classList.add('active');
      }
    } else if (activeDices.length === dices.length - 1) {
      event.target.classList.remove('active');
    }
    self.changeWinChance();
    this.gameService.winChanceChanged.next(this.winChance);
  }

  changeWinChance() {
    const activeDices = document.body.querySelectorAll('.two-dice .dice-item.active');
    const self = this;
    let sum = 0;
    activeDices.forEach(function(item) {
      const num = item.textContent;
      sum += self.countWinChance(num);
    });
    this.winChance = sum;
  }

  countWinChance(num) {
    const divider = 36;
    return +((this.chanceTable[num] / divider) * 100).toFixed(2);
  }
}
