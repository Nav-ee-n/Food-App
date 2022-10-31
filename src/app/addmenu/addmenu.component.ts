import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  menu={
    menuId:"",
    foodName:"",
    foodPrice:"",
    rname:""
  }

  log:any=[]
  constructor(private api:FoodService) {
    this.log=this.api.getUser()
    if(this.log){
      console.log(this.log.rname)
      this.menu.rname=this.log.rname
    }
   }
   Addmenu(){
    
    console.log(this.menu)
    this.api.addmenu(this.menu).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

  ngOnInit(): void {

  }
  

}
