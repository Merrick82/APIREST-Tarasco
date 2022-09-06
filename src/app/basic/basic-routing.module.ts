import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurseListComponent } from './components/curse-list/curse-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'student-list', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'curse-list', component: CurseListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
