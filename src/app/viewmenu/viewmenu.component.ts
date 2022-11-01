import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.css']
})
export class ViewmenuComponent implements OnInit {
 log:any=[]
 user:any=[]
  constructor(private api:FoodService) {
    this.log=this.api.getmenu()
    this.user=this.api.client()
    
    console.log(this.user)
    console.log("hi")
    console.log(this.log)
    if(this.log){
      console.log(this.log.rname)
      this.api.viewmenu(this.log).subscribe(
        (data)=>{
          console.log(data)
          this.data1=data
        }
      )
    }
    if(this.user){
      console.log("hai")
      console.log("user" +this.user)
      this.data2.signname=this.user.signname

    }
    
   }

  ngOnInit(): void {
  }

  order(i:any){
    console.log(this.user)
    console.log(this.data2)
    i.signname=this.data2.signname
    console.log(i)
    this.api.Order(i).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

  data1:any=[]
  data2:any=[]

}
