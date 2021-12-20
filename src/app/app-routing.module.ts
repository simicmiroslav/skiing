import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent }     from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SkiResortsComponent } from './ski-resorts/ski-resorts.component';

const coreRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ski-resorts/:resortId', component: SkiResortsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }