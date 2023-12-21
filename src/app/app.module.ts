import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
// import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

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
// import { DrawerComponent } from './drawer/drawer.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './shared/window_format/navbar/navbar.component';
import { SidebarComponent } from './shared/window_format/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WindowDashboardComponent } from './pages/window-dashboard/window-dashboard.component';
import { WindowCalendarComponent } from './pages/window-calendar/window-calendar.component';
import { WindowSubscriptionsComponent } from './pages/window-subscriptions/window-subscriptions.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

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
    // DrawerComponent,
    AuthComponent,
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
    // CdkTableModule,
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
    provideFirebaseApp(() => initializeApp({"projectId":"trialtracker-f66c4","appId":"1:716035475632:web:45a7a9090431422d63d375","databaseURL":"https://trialtracker-f66c4-default-rtdb.firebaseio.com","storageBucket":"trialtracker-f66c4.appspot.com","apiKey":"AIzaSyBq2qW4IzQluIiG2TNy9JMNY0DTRGJfafA","authDomain":"trialtracker-f66c4.firebaseapp.com","messagingSenderId":"716035475632","measurementId":"G-9CBGB6YGZX"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider("6LeQOTgpAAAAAItobGsudpm1De65RQOXY1Z4n6Qu");
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
