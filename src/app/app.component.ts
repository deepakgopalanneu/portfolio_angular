import { Component, OnInit } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private  client:HttpClient){}
  


  ngOnInit(): void { }

  title = 'portfolio';
}
