import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

 
  feedback={
    name:"",
    rname:"",
    fdk:""

  }
  user:any=[]
  menu:any=[]
  constructor(private api:FoodService) { 
    this.user=this.api.client()
    this.menu=this.api.getmenu()
    if(this.user){
      console.log(this.user)
      this.feedback.name=this.user.signname
      console.log(this.feedback)
    }
    if(this.menu){
      console.log(this.user)
      this.feedback.rname=this.menu.rname
      console.log(this.feedback)

    }

  }

  ngOnInit(): void {
  }
  addfeedback(){
    console.log(this.feedback)
    this.api.Addfeedback(this.feedback).subscribe(
      (data)=>{
        console.log(data)
    
      }
    )
  }

}
