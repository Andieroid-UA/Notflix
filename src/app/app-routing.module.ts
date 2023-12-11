import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WindowCenterComponent } from "./window_format/window-center/window-center.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: "auth", component: AuthComponent },
  {path: "main", component: WindowCenterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
