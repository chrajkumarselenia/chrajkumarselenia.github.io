import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { adminAuthGuard } from './auth-guard/adminAuth';
import { superAdminAuthGuard } from './auth-guard/superAdminAuth';
import{} from './auth-guard/operatorAuth';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        //canActivate:[superAdminAuthGuard]
        canActivate:[adminAuthGuard]

      },
      {
        path: 'adashboard',
        loadChildren: './adashboard/adashboard.module#AdashboardModule',
        canActivate:[adminAuthGuard]
      },
      {
        path: 'odashboard',
        loadChildren: './odashboard/odashboard.module#OdashboardModule'
        
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule',
        canActivate:[adminAuthGuard]
        //canActivateChild:[superAdminAuthGuard]
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule',
        //canActivate:[AdminAuth]
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
