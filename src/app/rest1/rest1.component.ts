import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-rest1',
  templateUrl: './rest1.component.html',
  styleUrls: ['./rest1.component.css']
})
export class Rest1Component implements OnInit {
  rdata={
    rname:"Zam Zam"
  }

  constructor(private api:FoodService,
    private router:Router) {
    this.api.viewtable(this.rdata).subscribe(
      (data)=>{
        console.log(data)
        this.table=data
      }
    )
   }

  ngOnInit(): void {
  }
  book(i:any){
    console.log(i)
    this.api.updatetable(i).subscribe(
      (data)=>{
        console.log(data)
        this.table=data
      }
    )
  }
  menu(i:any){
    this.api.savemenu(i[0])
    this.router.navigate(['/viewmenu'])
  }

  feedback(i:any){
    this.api.savemenu(i[0])
    this.router.navigate(['/feedback'])
  }

  table:any=[]

}
