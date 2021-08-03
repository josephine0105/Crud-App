import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';
  alluser: Object;
  isedit=false;  
  userObj={
    id:'',
    email:'',
    password:''
  }
adddata(formObj){
  console.log(formObj);
  this.commonService.create(formObj).subscribe((response)=>{})
 this.getlatestuser();
}
getlatestuser(){
  this.commonService.getalluser().subscribe((response)=>{
    this.alluser=response
  })
}
edit(user){
  this.isedit=true;
  this.userObj=user;
}
delete(user){
  this.commonService.delete(user).subscribe(()=>{
this.getlatestuser();
  });
  
} 
update(){
  this.isedit=!this.isedit;
  this.commonService.update(this.userObj).subscribe(()=>{
    this.getlatestuser();
  })
}  
constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getlatestuser();
  }

}
