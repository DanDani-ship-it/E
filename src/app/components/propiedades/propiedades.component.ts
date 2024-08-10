import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [],
  template: `
    <div class="header-image">
      <div class="header-content">
        <h1 data-aos="fade-right" data-aos-duration="2000">
          Propiedades Disponibles
        </h1>
        <p data-aos="fade-right"></p>
      </div>
    </div>
  `,
  styleUrl: './propiedades.component.css',
})
export class PropiedadesComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
