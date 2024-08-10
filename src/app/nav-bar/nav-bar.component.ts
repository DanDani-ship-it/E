import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">AMX</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="#"
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                data-aos="fade-right"
                data-aos-duration="500"
                >Inicio</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/propiedades"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                data-aos="fade-right"
                data-aos-duration="1000"
                >Propiedades</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                data-aos="fade-right"
                data-aos-duration="1500"
                >Asesores</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                data-aos="fade-right"
                data-aos-duration="2000"
                >Contactanos</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
