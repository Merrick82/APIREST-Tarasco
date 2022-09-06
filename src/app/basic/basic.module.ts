import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRoutingModule } from './basic-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicRoutingModule
  ],
  exports: [
    BasicRoutingModule
  ]
})
export class BasicModule { }
