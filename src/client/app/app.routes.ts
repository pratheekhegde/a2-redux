import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { DashboardRoutes } from './dashboard/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...DashboardRoutes
];
