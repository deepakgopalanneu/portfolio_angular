import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
},
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'contactme',
    component: ContactmeComponent 
}
// ,
// {
//     path: 'home',
//     component: AppComponent 
// },
// {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
// },
// {
//     path: '**',
//     redirectTo: '/home',
//     pathMatch: 'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
