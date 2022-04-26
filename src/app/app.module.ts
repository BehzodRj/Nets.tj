import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateClientsPageComponent } from './private-clients-page/private-clients-page.component';
import { ForBusinessPageComponent } from './for-business-page/for-business-page.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { VacancySpecialComponent } from './vacancy-special/vacancy-special.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PrivateClientsPageComponent,
    ForBusinessPageComponent,
    VacancyPageComponent,
    HeaderComponent,
    FooterComponent,
    VacancySpecialComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
