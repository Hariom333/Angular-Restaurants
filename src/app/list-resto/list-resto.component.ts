import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
//collection = {};
collection : any = [];
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
 this.resto.getList().subscribe((result)=>{
 //this.collection = result;
  console.log(result);
  this.collection = result;
  //this.collection = result;

 });
 
  }


  deleteResto(item: any){
  // alert(item);
 this.collection.splice(item-1,1)
  this.resto.deleteResto(item).subscribe((result)=>{
 
 console.log(result);   
  })

}





}
