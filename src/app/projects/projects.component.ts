import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  repositories : any
  topics = ["angular", "springboot", "nodejs", "terraform", "ci-cd", "mongodb","java","javascript", "typescript","html", "css", "github", 
  "aws", "ses", "sns", "route53", "lambda", "vpc", "dynamodb", "rds", "elb", "cloudwatch", "autoscaling" , "certificatemanager"]; 
  url = "https://api.github.com/users/deepakgopalanneu/repos"
 
  constructor(private http :HttpClient) { }


  ngOnInit(): void {
  
    this.http.get(this.url).subscribe( (repos : any)   => {
      console.log(repos );
      this.repositories = repos;
      
  //     for(let repo of repos){
  //       this.http.get(`https://api.github.com/repos/deepakgopalanneu/${repo.name}/topics`, { headers: new HttpHeaders().set("Accept","application/vnd.github.mercy-preview+json")})
  //       .subscribe( (topic : any)   =>   {
  //         let obj = { repo , topic};
  //         this.topics.push(obj) 
  //   });
  // }
  });

}
}
