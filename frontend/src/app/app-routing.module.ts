import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from "./main/main.component";
// import { FaqsComponent } from "./faqs/faqs.component";
// import {FaqsModule} from "./faqs/faqs.module";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'game', loadChildren: './game/game.module#GameModule' },
  { path: 'faqs', loadChildren: './faqs/faqs.module#FaqsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
