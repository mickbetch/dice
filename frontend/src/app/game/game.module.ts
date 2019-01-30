import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { GameRoutingModule } from "./game-routing";

import { GameComponent } from "./game.component";
import { BetsComponent } from "./bets/bets.component";
import { Web3Component } from "./web3/web3.component";
import { InfoComponent } from "./info/info.component";
import { CoinComponent } from "./coin/coin.component";
import { DiceComponent } from "./dice/dice.component";
import { HistoryComponent } from "./history/history.component";
import { EtherollComponent } from "./etheroll/etheroll.component";
import { TwoDiceComponent } from "./two-dice/two-dice.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    GameComponent,
    BetsComponent,
    Web3Component,
    InfoComponent,
    CoinComponent,
    DiceComponent,
    TwoDiceComponent,
    EtherollComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    GameRoutingModule,
    SharedModule
  ]
})

export class GameModule {

}
