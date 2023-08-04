import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SalesProjectComponent } from './components/sales-project/sales-project.component';
import { CompletedProjectComponent } from './components/completed-project/completed-project.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { DeliveredProjectComponent } from './components/delivered-project/delivered-project.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'sobre-nosotros',component:AboutUsComponent},
  {path:'proyectos-en-venta',component:SalesProjectComponent},
  {path:'proyectos-entregados',component:DeliveredProjectComponent},
  {path:'beneficios',component:BenefitsComponent},
  {path:'contacto',component:ContactUsComponent},
  {path:'proyectos-ejecutados',component:CompletedProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
