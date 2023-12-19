import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { WindowDashboardComponent } from './pages/window-dashboard/window-dashboard.component';
import { WindowCalendarComponent } from './pages/window-calendar/window-calendar.component';
import { WindowSubscriptionsComponent } from './pages/window-subscriptions/window-subscriptions.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'subscriptions', component: WindowSubscriptionsComponent },
  { path: 'dashboard', component: WindowDashboardComponent },
  { path: 'calendar', component: WindowCalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
