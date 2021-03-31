import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  myEmailId = "gopalan.d@northeastern.edu"
  form :FormGroup;
  sent :boolean = false;
  failed: boolean =false;
  constructor(private formBuilder: FormBuilder, private http :HttpClient) {
    this.form = this.formBuilder.group({
      messageControl: new FormControl('', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(1000)])),
      emailControl: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    });
  }

  get f()
{
    return this.form.controls;
}

  ngOnInit(): void {
    
  }

  sendEmail(){
    // call API

    if(this.form.valid){
    let body = {
      senderEmail : this.form.value.emailControl,
      messageBody : this.form.value.messageControl
    }
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    this.http.post("/sendEmail", body, {headers} ).subscribe (res =>{
      console.log(res);
      this.sent=true;
      setTimeout( () => {
        this.sent = false;
      }, 2000);
      this.form.reset();
    },
    err => {
      this.failed = true;
      setTimeout( () => {
        this.failed = false;
      }, 2000);
      console.log(err);
    })
  }
  }
}


