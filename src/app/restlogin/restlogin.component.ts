import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-restlogin',
  templateUrl: './restlogin.component.html',
  styleUrls: ['./restlogin.component.css']
})
export class RestloginComponent implements OnInit {
  log:any=[]

  constructor(private api:FoodService) { 
    this.log=this.api.getUser()
    console.log(this.log)
    if(this.log){
      console.log("hai")
      console.log(this.log)
    }
    this.api.viewtable(this.log).subscribe(
      (data)=>{
        console.log(data)
        this.table=data
      }
    )
  }
  

  ngOnInit(): void {
    
  }
  unbook(i:any){
    console.log(i)
    this.api.unbooktable(i).subscribe(
      (data)=>{
        console.log(data)
        this.table=data
      }
    )
  }

  table:any=[]

}
