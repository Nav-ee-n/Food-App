import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restreg={
    rname:"",
    rid:""
  }

  constructor(private api:FoodService,private router:Router) { }

  ngOnInit(): void {
  }
  Rlogin(){
    this.api.rlogin(this.restreg).subscribe((restreg)=>{
      if(restreg.success === true){
        this.router.navigate(['/restlogin'])
      }
      else{
        alert(restreg.success)
      }
    })
  }

}
