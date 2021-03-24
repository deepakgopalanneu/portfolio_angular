import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = `I am an enthusiastic software developer with 3+ years of experience at both small startups and large organizations. While I'm a proficient full-stack
  developer, my expertise is in building scalable backend services.`

  expectations=`I love building things.
  I'm most attracted to solving real customer problems with a business justification.
  I'm looking for a mid-senior individual contributor role where I can take on on collaborative
  team leadership responsibilites, and gain experience with
  architecture and project management.`

  more = `Apart from coding, I'm a DJ! I enjoy Techno and Deep house music! I also love to travel, play soccer and occasionally play "friendly" poker! Get to know more about me on LinkedIn and Github.`
}
