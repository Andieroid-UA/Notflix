import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { WindowDashboardComponent } from "./shared/window_format/window-dashboard/window-dashboard.component";
import { WindowTasklistComponent } from "./shared/window_format/window-tasklist/window-tasklist.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: "auth", component: AuthComponent },
  { path: "tasklist", component: WindowTasklistComponent},
  { path: "dashboard", component: WindowDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
