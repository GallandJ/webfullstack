import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertListComponent } from './advert-list/advert-list.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {path: 'adverts', component: AdvertListComponent},
  {path: 'advert-detail', component: AdvertDetailsComponent},
  {path: 'login', component: LoginComponent}
  //{path: 'register', component: RegisterComponent}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
