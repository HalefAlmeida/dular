import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NoItensComponent } from './components/no-itens/no-itens.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    NoItensComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SpinnerComponent,
    NoItensComponent
  ]
})
export class SharedModule { }
