import { Routes } from '@angular/router';
import { RedirectAuthService } from './service/auth/redirect-auth.service';
import { LoginComponent } from './components/users/login/login.component';
import { ReqisterComponent } from './components/users/reqister/reqister.component';
import { HomeComponent } from './components/users/home/home.component';
import { AuthService } from './service/auth/auth.service';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { AdminAuthService } from './service/adminAuth/admin-auth.service';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate:[RedirectAuthService]
    },
    {
        path: 'signup',
        component: ReqisterComponent,
        canActivate:[RedirectAuthService]
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[AuthService]
    },
    {
        path:'users',
        component:UserListComponent,
        canActivate:[AdminAuthService]
    },
    {
        path:'**',
        redirectTo:'login'
    }
];
