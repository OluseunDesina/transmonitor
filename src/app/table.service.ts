import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {

  jsonData: any[] = [];
  jsonDataUpdated = new Subject<any[]>()
  constructor(private http: HttpClient) {}

  getJsonData() {
    this.http.get(
      `https://jsonplaceholder.typicode.com/todos`
    ).subscribe((response: any[]) => {
      this.jsonData = response;
      this.jsonDataUpdated.next([...this.jsonData])
      console.log(response)
    }, (err) => {
      alert("An error occured while fetching data")
      this.jsonData = [];
      this.jsonDataUpdated.next([...this.jsonData])
    })
    return this.jsonDataUpdated.asObservable()
  }
}
