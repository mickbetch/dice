import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GameComponent } from "./game.component";
import { CoinComponent } from "./coin/coin.component";
import { DiceComponent } from "./dice/dice.component";
import { TwoDiceComponent } from "./two-dice/two-dice.component";
import { EtherollComponent } from "./etheroll/etheroll.component";

const gameRoutes: Routes = [
  { path: '', component: GameComponent, children: [
      { path: 'coin', component: CoinComponent },
      { path: 'dice', component: DiceComponent },
      { path: 'two-dice', component: TwoDiceComponent },
      { path: 'etheroll', component: EtherollComponent },
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(gameRoutes)
  ],
  exports: [RouterModule]
})
export class GameRoutingModule {

}
