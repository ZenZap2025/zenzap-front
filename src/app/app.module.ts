import { routing } from "./app-routing";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
//import { RegisterComponent } from "./register/register.component";

//RegisterComponent
@NgModule({
  declarations: [AppComponent, LoginComponent ],
  imports: [BrowserModule, 
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}