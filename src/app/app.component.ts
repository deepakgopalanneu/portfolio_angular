import { Component, OnInit } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private  client:HttpClient){}
  

  images: string[] = [];
  ngOnInit(): void { 

    this.images=["./../assets/img1","./../assets/img2","./../assets/img3" ]
  }


  title = 'Deepak';

  
}
