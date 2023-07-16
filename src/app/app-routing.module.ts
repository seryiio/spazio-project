import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SalesProjectComponent } from './components/sales-project/sales-project.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'sales-project',component:SalesProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
