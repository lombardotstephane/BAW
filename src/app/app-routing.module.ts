import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { AdministrationComponent } from './components/administration/administration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/personalPage',
    pathMatch: 'full'
  },
  {
    path: 'personalPage',
    component: PersonalPageComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
