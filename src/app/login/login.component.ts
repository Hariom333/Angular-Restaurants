import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restoData : RestoService) { }

  ngOnInit(): void {
  
 // this.restoData.getList()
  }

}
