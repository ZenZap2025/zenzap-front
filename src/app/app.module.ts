import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { LoginComponent } from "./login/login.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from "./home/home.component";
//import { RegisterComponent } from "./register/register.component";

//RegisterComponent
@NgModule({
  declarations: [LoginComponent ],
  imports: [BrowserModule, 
    FormsModule,
    routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}