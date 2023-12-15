import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/window_format/sidebar/sidebar.component';
import { NavbarComponent } from './shared/window_format/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { TaskComponent } from './pages/task/task/task.component';
import { TaskDialogComponent } from './pages/task/task-dialog/task-dialog.component';
import { TaskListComponent } from './pages/task/task-list/task-list.component';
import { AlertComponent } from './shared/window_format/sidebar/folders/folder_alert/alert.component';
import { ModalComponent } from './shared/window_format/sidebar/folders/modal.component';
import { WindowDashboardComponent } from './shared/window_format/window-dashboard/window-dashboard.component';
import { WindowTasklistComponent } from './shared/window_format/window-tasklist/window-tasklist.component';
import { FolderService } from './shared/window_format/sidebar/folders/folder.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    TaskComponent,
    TaskDialogComponent,
    TaskListComponent,
    AlertComponent,
    ModalComponent,
    WindowDashboardComponent,
    WindowTasklistComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [FolderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
