import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean = false

  EditResto =  new FormGroup({
    
    name : new FormControl(''),
    email: new FormControl(''),
    address : new FormControl('')
  
  })

  constructor(private router:ActivatedRoute , private resto:RestoService) { }

  ngOnInit(): void {
    
    //console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result: any)=> {
 
     // console.log(result);

      this.EditResto =  new FormGroup({
    
        name : new FormControl(result['name']),
        email: new FormControl(result['email']),
        address : new FormControl(result['address'])
      
      })
    })
  }

Collection(){

console.log("item",this.EditResto.value);
this.resto.updateResto(this.router.snapshot.params.id,this.EditResto.value).subscribe((result)=>{
console.log("result",result)
this.alert = true;
});
}

closeAlert(){
  this.alert = false;
}


}
