import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/window_format/sidebar/sidebar.component';
import { NavbarComponent } from './shared/window_format/navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { TaskComponent } from './pages/task/task/task.component';
import { TaskDialogComponent } from './pages/task/task-dialog/task-dialog.component';
import { TaskListComponent } from './pages/task/task-list/task-list.component';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { WindowDashboardComponent } from './shared/window_format/window-dashboard/window-dashboard.component';
import { WindowTasklistComponent } from './shared/window_format/window-tasklist/window-tasklist.component';
import { FolderService } from './shared/window_format/sidebar/folder.service';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { TaskEditFormDialogComponent } from './pages/task/task-edit-form-dialog/task-edit-form-dialog.component';
import { DrawerComponent } from './pages/task/drawer/drawer.component';
import { ConfirmationDeleteDialogComponent } from './pages/task/confirmation-delete-dialog/confirmation-delete-dialog.component';
import { CabinetComponent } from './pages/task/cabinet/cabinet.component';
import { AddSubscriptionDialogComponent } from './pages/task/add-subscription-dialog/add-subscription-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
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
    WindowTasklistComponent,
    CalendarComponent,
    TaskEditFormDialogComponent,
    DrawerComponent,
    ConfirmationDeleteDialogComponent,
    CabinetComponent,
    AddSubscriptionDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [FolderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
