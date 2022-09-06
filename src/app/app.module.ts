import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './basic/components/student-list/student-list.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CurseListComponent } from './basic/components/curse-list/curse-list.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BasicModule } from './basic/basic.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentListComponent,
    CurseListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    BasicModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
