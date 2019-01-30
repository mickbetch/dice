import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { FaqsComponent } from "./faqs.component";

const faqsRoutes: Routes = [
  { path: '', component: FaqsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(faqsRoutes)
  ],
  exports: [RouterModule]
})
export class FaqsRoutingModule {

}
