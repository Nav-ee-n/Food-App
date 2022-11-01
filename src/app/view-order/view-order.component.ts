import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  log:any=[]
  constructor(private api:FoodService) { 
    this.log=this.api.getUser()
    console.log(this.log)
    if(this.log){
      console.log("hai")
      console.log(this.log)
    }
    this.api.vieworder(this.log).subscribe(
      (data)=>{
        console.log(data)
        this.order=data
      }
    )
  }

  ngOnInit(): void {
  }

  Deleteorder(i:any){
    this.api.deleteorder(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
        
      }
    )
  }
  order:any=[]

}
