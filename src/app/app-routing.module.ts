import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { CurseListComponent } from './basic/components/curse-list/curse-list.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { StudentListComponent } from './basic/components/student-list/student-list.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic', loadChildren: () => import('./basic/basic.module').then((m) => m.BasicModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
