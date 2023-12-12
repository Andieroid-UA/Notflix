import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './shared/window_format/sidebar/sidebar.component';
import { NavbarComponent } from './shared/window_format/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
>>>>>>>>> Temporary merge branch 2

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
