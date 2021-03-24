import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  url = "https://deepak-portfolio-resume.s3.amazonaws.com/Resume.pdf";

  ngOnInit(): void {
  }

}
