import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserGoalsComponent } from './components/user-goals/user-goals';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'user-goals', component: UserGoalsComponent }
        ]
    },
    { path: 'user-goals', redirectTo: '/home/user-goals', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
