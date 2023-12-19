import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddSubscriptionDialogComponent } from './add-subscription-dialog/add-subscription-dialog.component';
import { ConfirmationDeleteDialogComponent } from './confirmation-delete-dialog/confirmation-delete-dialog.component';
import { TaskEditFormDialogComponent } from './task-edit-form-dialog/task-edit-form-dialog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DropdownDirective } from './dropdown.directive';
import { CabinetComponent } from './cabinet/cabinet.component';
import { DrawerComponent } from './drawer/drawer.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './alert/alert.component';
import { AuthComponent } from './auth/auth.component';
import { ModalComponent } from './modal/modal.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './shared/window_format/navbar/navbar.component';
import { SidebarComponent } from './shared/window_format/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { WindowDashboardComponent } from './pages/window-dashboard/window-dashboard.component';
import { WindowCalendarComponent } from './pages/window-calendar/window-calendar.component';
import { WindowSubscriptionsComponent } from './pages/window-subscriptions/window-subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddSubscriptionDialogComponent,
    ConfirmationDeleteDialogComponent,
    TaskEditFormDialogComponent,
    NavigationComponent,
    DropdownDirective,
    CabinetComponent,
    DrawerComponent,
    AuthComponent,
    ModalComponent,
    CalendarComponent,
    DashboardComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    SidebarComponent,
    WindowDashboardComponent,
    AlertComponent,
    WindowCalendarComponent,
    WindowSubscriptionsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
