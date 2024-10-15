import { Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';


export const routes: Routes = [

    {path:'login', component: LoginComponent},
    {
        path: 'admin',
        loadChildren: () => import('./admin.routes').then(m => m.adminRoutes),
     },
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
   
];


