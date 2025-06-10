import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor() {}

  login() {
    // Validación básica
    if (!this.email || !this.password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Simulación de inicio de sesión (reemplazar con lógica real)
    console.log("Iniciando sesión con:");
    console.log("Email:", this.email);
    console.log("Password:", this.password);

    // Aquí iría la lógica de autenticación (ej: servicio HTTP)
  }
}