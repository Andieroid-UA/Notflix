import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './window_format/sidebar/sidebar.component';
import { NavbarComponent } from './window_format/navbar/navbar.component';
import { WindowCenterComponent } from './window_format/window-center/window-center.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FolderService } from './window_format/sidebar/folder.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskComponent } from './task/task/task.component';
import { TaskDialogComponent } from './task/task-dialog/task-dialog.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    WindowCenterComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    DashboardComponent,
    TaskComponent,
    TaskDialogComponent,
    TaskListComponent,
    AlertComponent,
    ModalComponent,
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
