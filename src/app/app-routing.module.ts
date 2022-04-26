import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForBusinessPageComponent } from './for-business-page/for-business-page.component';
import { HeaderComponent } from './header/header.component';
import { PrivateClientsPageComponent } from './private-clients-page/private-clients-page.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';
import { VacancySpecialComponent } from './vacancy-special/vacancy-special.component';

const routes: Routes = [
  { path: '', component: PrivateClientsPageComponent },
  { path: 'b2b', component: ForBusinessPageComponent },
  { path: 'vacancy', component: VacancyPageComponent }, 
  { path: 'vacancy-special', component: VacancySpecialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
