import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menutable',
  templateUrl: './menutable.component.html',
  styleUrls: ['./menutable.component.css']
})
export class MenutableComponent implements OnInit {
  log:any=[]
  constructor(private api:FoodService) {
    this.log=this.api.getUser()
    console.log(this.log)
    if(this.log){
      console.log("hai")
      console.log(this.log)
    }
    this.api.viewmenu(this.log).subscribe(
      (data)=>{
        console.log(data)
        this.menu=data
      }
    )

   }

  ngOnInit(): void {
  }
  Deletemenu(i:any){
    this.api.deletemenu(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
        
      }
    )
  }

  menu:any=[]

}
