import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Material Component
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SalesProjectComponent } from './components/sales-project/sales-project.component';
import { AppRoutingModule } from './app-routing.module';
import { CompletedProjectComponent } from './components/completed-project/completed-project.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { NgFor, NgIf } from '@angular/common';
import { DeliveredProjectComponent } from './components/delivered-project/delivered-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    SalesProjectComponent,
    CompletedProjectComponent,
    ContactUsComponent,
    BenefitsComponent,
    DeliveredProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    NgFor,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
