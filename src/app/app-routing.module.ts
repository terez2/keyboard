import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RadialComponent} from "./components/radial/radial.component";
import {CustomKeyboardComponent} from "./components/custom-keyboard/custom-keyboard.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
