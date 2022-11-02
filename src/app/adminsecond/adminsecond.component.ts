import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-adminsecond',
  templateUrl: './adminsecond.component.html',
  styleUrls: ['./adminsecond.component.css']
})
export class AdminsecondComponent implements OnInit {
  username="admin"
  password="admin123"

  constructor(private api:FoodService, private router:Router) { }

  ngOnInit(): void {
  }
  Alogin(){
    if(this.username=="admin" && this.password=="admin123"){
      this.router.navigate(['/admintable'])
    }
    else{
      alert("Invalid User Credentials")
    }

}
}
