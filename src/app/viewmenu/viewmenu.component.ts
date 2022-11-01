import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.css']
})
export class ViewmenuComponent implements OnInit {
 log:any=[]
  constructor(private api:FoodService) {
    this.log=this.api.getmenu()
    console.log(this.log)
    if(this.log){
      console.log(this.log.rname)
      this.api.viewmenu(this.log).subscribe(
        (data)=>{
          console.log(data)
          this.data1=data
        }
      )
    }
    
   }

  ngOnInit(): void {
  }

  data1:any=[]

}
