import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-custcreate',
  templateUrl: './custcreate.component.html',
  styleUrls: ['./custcreate.component.css']
})
export class CustcreateComponent implements OnInit {

  sign={
    signphonenumber:"",
    signname:"",
    signemail:"",
    signpassword:""
  }

  constructor(private api:FoodService) { }

  ngOnInit(): void {
  }
  custcreate()
  {
    console.log(this.sign)
    this.api.Custcreate(this.sign).subscribe((data)=>{
    })
    alert("success");
  }

}
