import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { TaskListComponent } from './pages/task/task-list/task-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DrawerComponent } from './pages/task/drawer/drawer.component';
import { CabinetComponent } from './pages/task/cabinet/cabinet.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'tasklist', component: TaskListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: "drawer", component: DrawerComponent},
  { path: "cabinet", component: CabinetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
