import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertListComponent } from './advert-list/advert-list.component';
//import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { AdvertFormComponent } from './advert-form/advert-form.component';

export const routes: Routes = [
  {path: '', component: AdvertListComponent},
//  {path: 'advert/detail/:id', component: AdvertDetailsComponent},
  {path: 'advert/form', component: AdvertFormComponent}
  //{path: 'advert/form/:id', component: AdvertFormComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
