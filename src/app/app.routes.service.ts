
import { LogsComponent } from './views/logs/logs.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ManagerComponent } from './views/manager/manager.component';
import { HelpComponent } from './views/help/help.component';
import { LoginComponent } from './main-layout/login/login.component';
import { LayoutComponent } from './main-layout/layout/layout.component';
import { AuthGuard } from './auth.guard';


const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/login' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'logs', component: LogsComponent, canActivate: [AuthGuard] },
      { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] },
      { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
