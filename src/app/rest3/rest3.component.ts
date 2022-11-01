import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-rest3',
  templateUrl: './rest3.component.html',
  styleUrls: ['./rest3.component.css']
})
export class Rest3Component implements OnInit {
  rdata={
    rname:"Barbeque Space"
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

  table:any=[]

}
