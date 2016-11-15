import { Route } from '@angular/router';
import { HomeComponent } from './index';
import { NavbarComponent } from '../shared/navbar/index';
import { FooterComponent } from '../shared/footer/index';

export const HomeRoutes: Route[] = [
  {
    path: '',
    children:[
      { path: '', component: HomeComponent},
      { path: '' , component: NavbarComponent, outlet: 'navbar'},
      { path: '' , component: FooterComponent, outlet: 'footer'}
    ]
  }
];
