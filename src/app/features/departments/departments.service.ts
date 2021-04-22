import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import { environment } from 'src/environments/environment';

export interface Department {

}

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService extends CrudService<Department>{

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}departments`)
  }
}
