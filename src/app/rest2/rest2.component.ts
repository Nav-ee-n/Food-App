import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-rest2',
  templateUrl: './rest2.component.html',
  styleUrls: ['./rest2.component.css']
})
export class Rest2Component implements OnInit {

  constructor(private api:FoodService) { }

  ngOnInit(): void {
    this.api.viewtable().subscribe(
      (data)=>{
        console.log(data)
        this.table=data
      }
    )
  }
  book(i:any){
    this.api.updatetable(i).subscribe(
      (data)=>{
        console.log(data)
        this.table=data
      }
    )
  }

  table:any=[]

}
