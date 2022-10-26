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
  Restadd(restreg:any)
  {
    return this.http.post<any>('http://localhost:3000/restadd',restreg)
  }
  clogin(t3:any){
    return this.http.post<any>('http://localhost:3000/login',t3)
  }
  rlogin(t2:any){
    return this.http.post<any>('http://localhost:3000/restaurant',t2)
  }
}
