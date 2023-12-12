import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';

import { NgChartsModule } from 'ng2-charts';

import { SidebarComponent } from './shared/window_format/sidebar/sidebar.component';
import { NavbarComponent } from './shared/window_format/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FolderService } from './shared/window_format/sidebar/folder.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskComponent } from './pages/task/task/task.component';
import { TaskDialogComponent } from './pages/task/task-dialog/task-dialog.component';
import { TaskListComponent } from './pages/task/task-list/task-list.component';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { WindowDashboardComponent } from './shared/window_format/window-dashboard/window-dashboard.component';
import { WindowTasklistComponent } from './shared/window_format/window-tasklist/window-tasklist.component';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule, 
    NgChartsModule

    SidebarComponent,
    NavbarComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    DashboardComponent,
    TaskComponent,
    TaskDialogComponent,
    TaskListComponent,
    AlertComponent,
    ModalComponent,
    WindowDashboardComponent,
    WindowTasklistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [FolderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
