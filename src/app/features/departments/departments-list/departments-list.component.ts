import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department, DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

  departments$: Observable<Department>

  constructor(
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit(): void {
    this.departments$ = this.departmentsService.list()
  }

}
