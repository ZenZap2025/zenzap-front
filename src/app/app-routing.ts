import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
// import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" }, // redirección inicial
  { path: "login", component: LoginComponent },
  // { path: "register", component: RegisterComponent, pathMatch: "full" },
];

export const routing = RouterModule.forRoot(appRoutes);