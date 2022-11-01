import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
   log:any=[]
  constructor(private api:FoodService) {
    this.log=this.api.getUser()
    this.api.viewfeedback(this.log).subscribe(
      (data)=>{
        console.log(data)
        this.fb=data
      }
    )
   }
  
   fb:any=[]
  ngOnInit(): void {
  }
}
