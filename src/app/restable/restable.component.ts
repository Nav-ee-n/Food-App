import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-restable',
  templateUrl: './restable.component.html',
  styleUrls: ['./restable.component.css']
})
export class RestableComponent implements OnInit {
  table={
    tableid:"",
    tableno:"",
    rname:""
  }
  log:any=[]
  constructor(private api:FoodService) { 
    this.log=this.api.getUser()
    if(this.log){
      console.log(this.log.rname)
      this.table.rname=this.log.rname
    }
  }

  ngOnInit(): void {
  }
  submit(){
    
    console.log(this.table)
    this.api.Submit(this.table).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

}
