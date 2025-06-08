import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
// import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" }, // redirección inicial
  { path: "login", component: LoginComponent },
  { path: 'home', component: HomeComponent }
  // { path: "register", component: RegisterComponent, pathMatch: "full" },
];

export const routing = RouterModule.forRoot(appRoutes);