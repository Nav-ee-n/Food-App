import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/food.service';

@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css']
})
export class AdmintableComponent implements OnInit {

  constructor(private api:FoodService) { }

  ngOnInit(): void {
    this.api.viewtable().subscribe(
      (data)=>{
        console.log(data)
        this.table=data
      }
    )
  }

 
  table:any=[]

}
