import { DrawerComponent } from "./drawer/drawer.component";
import { CabinetComponent } from "./cabinet/cabinet.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { CalendarComponent } from "./pages/calendar/calendar.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TaskListComponent } from "./task-list/task-list.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: 'auth', component: AuthComponent },
  { path: "drawer", component: DrawerComponent,},
  { path: "cabinet", component: CabinetComponent },
  { path: 'tasklist', component: TaskListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
