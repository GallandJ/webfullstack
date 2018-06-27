import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertListComponent } from './advert-list/advert-list.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';

export const routes: Routes = [
  {path: '', component: AdvertListComponent},
  {path: 'advert-detail', component: AdvertDetailsComponent}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
