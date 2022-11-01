import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sign={
    signname:"",
    signpassword:""
  }

  constructor(private api:FoodService,private router:Router) { }

  ngOnInit(): void {

  }
  Clogin(){
    this.api.clogin(this.sign).subscribe((sign)=>{
      
     
   
      if(sign.success === true){
        console.log(sign)
        console.log(sign.sign)
        this.api.saveclient(sign.sign)
        this.router.navigate(['/booking'])
      }
      else{
        alert(sign.success)
      }
    })
  }

}
