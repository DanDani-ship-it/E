import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  template: `
    <!-- <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2020/01/15/12/57/kyrgyzstan-4767882_1280.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 data-aos="fade-right">Bienvenido</h2>
            <p data-aos="fade-left">Una Pagina hecha por DanDani</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 data-aos="fade-right">Es mi primera pagina web</h2>
            <p data-aos="fade-left">GG.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2020/09/10/04/40/mountains-5559241_1280.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 data-aos="fade-right">Skibidi Toilet</h2>
            <p data-aos="fade-left">Hola Mundo</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->

    <div class="header-image">
      <div class="header-content">
        <h1 data-aos="fade-right" data-aos-duration="2000">Bienvenidos</h1>
        <p data-aos="fade-right"></p>
      </div>
    </div>

    <!-- Contenido de la página -->

    <div class="container mt-5" data-aos="fade-right">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="fs-6 text-secondary mb-2 text-uppercase text-center">
            Testimonios
          </h2>
          <p class="display-5 mb-4 mb-md-5 text-center">
            Experiencias Compartidas con Clientes.
          </p>
          <!-- <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" /> -->
        </div>
      </div>
    </div>

    <div class="container overflow-hidden mb-5">
      <div class="row gy-4 gy-md-0 gx-xxl-5">
        <div class="col-12 col-md-4">
          <div
            data-aos-offset="300"
            data-aos="fade-up"
            class="card border-0 border-bottom border-primary shadow-sm"
          >
            <div class="card-body p-4 p-xxl-5">
              <figure class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 border border-5"
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                  alt="Luna John"
                  style="width: 150px; height: 150px; object-fit: cover;"
                />
                <figcaption>
                  <div
                    class="bsb-ratings text-warning mb-3"
                    data-bsb-star="5"
                    data-bsb-star-off="0"
                  ></div>
                  <blockquote class="bsb-blockquote-icon mb-4">
                    We were so impressed with the work they did for us. They
                    were able to take our vision and turn it into a reality, and
                    they did it all on time and within budget. We would highly
                    recommend them to anyone looking for a reliable partner.
                  </blockquote>
                  <h4 class="mb-2">Luna John</h4>
                  <h5 class="fs-6 text-secondary mb-0">UX Designer</h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div
            data-aos-offset="300"
            data-aos="fade-up"
            class="card border-0 border-bottom border-primary shadow-sm"
          >
            <div class="card-body p-4 p-xxl-5">
              <figure class="text-center">
                <img
                  class="img-fluid rounded rounded-circle mb-4 border border-5"
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                  alt="Mark Smith"
                  style="width: 150px; height: 150px; object-fit: cover;"
                />
                <figcaption>
                  <div
                    class="bsb-ratings text-warning mb-3"
                    data-bsb-star="4"
                    data-bsb-star-off="1"
                  ></div>
                  <blockquote class="bsb-blockquote-icon mb-4">
                    We were looking for a company that could help us develop a
                    new website that was both visually appealing and
                    user-friendly. We are so happy with the results, and we
                    would highly recommend them to anyone looking for a new
                    website.
                  </blockquote>
                  <h4 class="mb-2">Mark Smith</h4>
                  <h5 class="fs-6 text-secondary mb-0">Marketing Specialist</h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div
            class="card border-0 border-bottom border-primary shadow-sm"
            data-aos="fade-up"
            data-aos-offset="300"
          >
            <div class="card-body p-4 p-xxl-5">
              <figure class="text-center">
                <img
                  class="img-fluid rounded rounded-circle mb-4 border border-5"
                  loading="lazy"
                  src="https://cdn.pixabay.com/photo/2017/09/25/13/12/man-2785071_1280.jpg"
                  alt="Luke Reeves"
                  style="width: 150px; height: 150px; object-fit: cover;"
                />
                <figcaption>
                  <div
                    class="bsb-ratings text-warning mb-3"
                    data-bsb-star="5"
                    data-bsb-star-off="0"
                  ></div>
                  <blockquote class="bsb-blockquote-icon mb-4">
                    We were looking for a company that could help us with our
                    branding. We needed a website and marketing materials. They
                    were able to create a brand identity that we loved. They
                    worked with us to develop a logo that represented our
                    company.
                  </blockquote>
                  <h4 class="mb-2">Luke Reeves</h4>
                  <h5 class="fs-6 text-secondary mb-0">Sales Manager</h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  @HostListener('window:scroll', [])
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  onWindowScroll() {
    const headerImage = document.getElementById('headerImage');
    if (headerImage) {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        // Ajusta este valor según cuándo quieres que la imagen se expanda
        headerImage.classList.add('expanded');
      } else {
        headerImage.classList.remove('expanded');
      }
    }
  }
}
