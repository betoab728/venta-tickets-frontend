import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
    {
        path:'',
        loadComponent: () => import('./dashboard/layout/layout.component').then(m => m.LayoutComponent),
        children:[
              { path: 'main',loadComponent: () => import('./dashboard/report/report.component').then(m => m.ReportComponent)},
              { path: 'usuarios',loadComponent: () => import('./users/components/user-list/user-list.component').then(m => m.UserListComponent)   },
              { path: 'usuarios/nuevo',loadComponent: () => import('./users/components/add-user/add-user.component').then(m => m.AddUserComponent)   },
              { path: 'usuarios/editar/:id',loadComponent: () => import('./users/components/edit-user/edit-user.component').then(m => m.EditUserComponent) },
              {path: 'trabajadores',loadComponent: () => import('./trabajadores/components/trabajadores/trabajadores.component').then(m => m.TrabajadoresComponent) },
              {path: 'cargos',loadComponent: () => import('./cargos/components/cargos/cargos.component').then(m => m.CargosComponent) },
              {path: 'reportes',loadComponent: () => import('./reportes/components/reportes/reportes.component').then(m => m.ReportesComponent) },
              {
                path:'',
                redirectTo: 'main',
                pathMatch: 'full'
              }
        ]
    }
];