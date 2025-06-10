import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
//import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  //{ path: "register", component: RegisterComponent },
  { path: "**", redirectTo: "/home" } // Ruta de error
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}