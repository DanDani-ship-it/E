import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  template: `
    <div class="header-image">
      <div class="header-content">
        <h1>Bienvenido a Mi Sitio</h1>
        <p>Una Pagina hecha por DanDani</p>
      </div>
    </div>

    <!-- Contenido de la página -->
    <div class="container mt-5">
      <h2>Sección de Contenido</h2>
      <p>Aquí va el contenido de la página...</p>
      <!-- Resto del contenido -->
    </div>
  `,
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
