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
    
    this.api.viewrestaurant().subscribe(
      (data)=>{
        console.log(data)
        this.res=data
      }
    )
  }

  ngOnInit(): void {
    
  }

 
  res:any=[]

}
