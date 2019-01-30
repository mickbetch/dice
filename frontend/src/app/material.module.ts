import {NgModule} from "@angular/core";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatSliderModule
} from '@angular/material'

@NgModule({
imports: [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatSliderModule
],
exports: [
 MatSidenavModule,
 MatToolbarModule,
 MatButtonModule,
 MatListModule,
  MatMenuModule,
  MatSliderModule
]
})

export class MaterialModule {

}
