import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/food.service';

@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css']
})
export class AdmintableComponent implements OnInit {
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

 
  table:any=[]

}
