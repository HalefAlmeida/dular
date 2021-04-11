import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DepartmentsListComponent,
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedModule
  ]
})
export class DepartmentsModule { }
