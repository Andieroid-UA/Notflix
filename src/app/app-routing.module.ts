import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { CalendarComponent } from "./pages/calendar/calendar.component";
import { WindowDashboardComponent } from "./pages/window-dashboard/window-dashboard.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: 'auth', component: AuthComponent },
  { path: 'tasklist', component: CalendarComponent },
  { path: 'dashboard', component: WindowDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
