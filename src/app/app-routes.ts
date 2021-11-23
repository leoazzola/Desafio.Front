import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './navegacao/home/home.component';
import {AddPersonPhoneComponent} from './add-person-phone/add-person-phone.component';
import {ListPersonPhoneComponent} from './list-person-phone/list-person-phone.component';

export const rootRouterConfig: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'add-person', component: AddPersonPhoneComponent },
  { path: 'list-person', component: ListPersonPhoneComponent },
  {path : '', component : HomeComponent}
];

export const routing = RouterModule.forRoot(rootRouterConfig);