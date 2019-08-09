
import { LogsComponent } from './views/logs/logs.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ManagerComponent } from './views/manager/manager.component';
import { HelpComponent } from './views/help/help.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', component: NotFoundComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
