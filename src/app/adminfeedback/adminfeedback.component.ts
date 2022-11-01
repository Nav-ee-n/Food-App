import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-adminfeedback',
  templateUrl: './adminfeedback.component.html',
  styleUrls: ['./adminfeedback.component.css']
})
export class AdminfeedbackComponent implements OnInit {
  log:any=[]
  constructor(private api:FoodService) {
    this.log=this.api.getUser()
    this.api.adminfeedback().subscribe(
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
