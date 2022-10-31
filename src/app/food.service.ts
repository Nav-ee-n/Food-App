import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  USER_KEY:any=[]

  constructor(private http:HttpClient) { }


  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));

  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }

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

  Submit(i:any){
    return this.http.post<any>('http://localhost:3000/table',i)
  }

  viewtable(i:any){
    return this.http.post<any>('http://localhost:3000/viewtable',i)
  }

  updatetable(i:any){
    return this.http.put<any>('http://localhost:3000/updatetable/'+i._id,i)
  }
  unbooktable(i:any){
    return this.http.put<any>('http://localhost:3000/unbooktable/'+i._id,i)
  }
  
  addmenu(i:any){
    return this.http.post<any>('http://localhost:3000/addmenu',i)
  }

  viewmenu(i:any){
    return this.http.post<any>('http://localhost:3000/viewmenu',i)
  }

  deletemenu(i:any){
    return this.http.delete<any>('http://localhost:3000/deletemenu/'+i._id)
  }

}
