import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  usersInfoArray = [];
  numbersDictionary = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6
  };

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.usersInfoArray = this.gameService.getUsersInfoArray();
  }

  toggleInfoBlock(event) {
    const hiddenBlock =  event.currentTarget.parentNode.querySelector('.info__list');
    const arrow = event.currentTarget.querySelector('.content__item--jackpot i');
    const rightArrowClass = 'fa-angle-right';
    const downArrowClass = 'fa-angle-down';

    hiddenBlock.classList.toggle('hidden');

    if (!hiddenBlock.classList.contains('hidden')) {
      arrow.classList.remove(rightArrowClass);
      arrow.classList.add(downArrowClass);
    } else {
      arrow.classList.remove(downArrowClass);
      arrow.classList.add(rightArrowClass);
    }
  }

}
