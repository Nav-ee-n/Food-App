import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  Custcreate(sign:any)
  {
     return this.http.post<any>('http://localhost:3000/custcreate',sign)
  }
}
