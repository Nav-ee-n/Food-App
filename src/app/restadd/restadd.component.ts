import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-restadd',
  templateUrl: './restadd.component.html',
  styleUrls: ['./restadd.component.css']
})
export class RestaddComponent implements OnInit {

  restreg={
    rname:"",
    rid:"",
    runame:"",
    phoneno:"",
    location:""
  }

  constructor(private api:FoodService) { }

  ngOnInit(): void {
  }
  restadd()
  {
    console.log(this.restreg)
    this.api.Restadd(this.restreg).subscribe((restreg)=>{
    })
    alert("success");
  }

}
