import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-restable',
  templateUrl: './restable.component.html',
  styleUrls: ['./restable.component.css']
})
export class RestableComponent implements OnInit {
  table={
    tableid:"",
    tableno:"",
  }

  constructor(private api:FoodService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.table)
    this.api.Submit(this.table).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

}
