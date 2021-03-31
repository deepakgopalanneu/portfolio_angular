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

    let body = { senderEmail : this.form.value.emailControl , messagBody : this.form.value.messageControl};
    const headers = new HttpHeaders({'Content-Type':'text/plain'});
    this.http.post("deepakgopalan.me/sendEmail", body, {headers} ).subscribe (res =>{
      this.sent=true;
      setTimeout( () => {
        this.sent = false;
      }, 2000);
      this.form.reset();
    },
    error => {
      this.failed = true;
      setTimeout( () => {
        this.failed = false;
      }, 2000);
      console.log(error);
    })
    
  }
}


