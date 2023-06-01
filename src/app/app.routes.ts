import {Routes} from '@angular/router';
import {FullLayoutComponent} from "./layout/full-layout/full-layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {SimpleLayoutComponent} from "./layout/simple-layout/simple-layout.component";

export const routes: Routes = [
    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        component: SimpleLayoutComponent,
        children: [
            {
                path: 'auth/register',
                component: AuthComponent
            },
        ]
    }
];
