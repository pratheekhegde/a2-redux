import { Route } from '@angular/router';
import { DashboardComponent } from './index';
import { NavbarComponent } from '../shared/navbar/index';
import { FooterComponent } from '../shared/footer/index';

export const DashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    children:[
      { path: '', component: DashboardComponent},
      { path: '' , component: NavbarComponent, outlet: 'navbar'},
      { path: '' , component: FooterComponent, outlet: 'footer'}
    ]
  }
];
