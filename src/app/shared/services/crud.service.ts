import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  constructor(
    protected http: HttpClient,
    private API_URL
  ) { }

  list() {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(2000)
      );
  }
}
