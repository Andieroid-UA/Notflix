import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WindowCenterComponent } from "./window-center/window-center.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: AuthComponent },
  {path: "main", component: WindowCenterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
