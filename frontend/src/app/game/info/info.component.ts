import {Component, OnDestroy, OnInit} from '@angular/core';
import { GameService } from "../game.service";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  coefficient = 1.94;
  winAmount;
  commissionPercent = 3;
  bet;
  jackpot = 0.12;
  jackpotMinBet = 10;
  toDecimal = 100;
  winChance;
  jackpotCommission = 0.1;
  betSub: Subscription;
  winChanceSub: Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.betSub = this.gameService.betChanged.subscribe(
      bet => {
        this.bet = bet;
        this.changeCommissionPercent();
        this.changeCoef();
      }
    );

    this.winChanceSub = this.gameService.winChanceChanged
      .subscribe(
        chance => {
          this.winChance = chance;
          this.changeCoef();
        }
      );
  }

  changeCommissionPercent() {
    if (this.bet === 1) {
      this.commissionPercent = 3;
    } else if (this.bet === 2) {
      this.commissionPercent = 1.5;
    } else {
      this.commissionPercent = 1;
    }
  }

  changeCoef() {
    const hundred = 100;
    const percent = ((hundred / this.winChance) * this.commissionPercent) / hundred;
    this.coefficient = (hundred / this.winChance) - percent;

    this.changeWinAmount();
  }

  changeWinAmount() {
    this.winAmount = this.bet * this.coefficient;
  }

  ngOnDestroy() {
    this.betSub.unsubscribe();
    this.winChanceSub.unsubscribe();
  }
}
