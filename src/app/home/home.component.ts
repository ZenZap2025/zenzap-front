import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  slides = [
    { image: 'https://picsum.photos/1200/400?random=2', title: 'Pausas Activas', description: 'Estiramientos rápidos para aliviar el estrés en la oficina' },
    { image: 'https://picsum.photos/1200/400?random=3', title: 'Respiración Guiada', description: 'Técnicas para reducir la ansiedad en minutos' },
    { image: 'https://picsum.photos/1200/400?random=4', title: 'Ergonomía Básica', description: 'Ajusta tu espacio de trabajo para prevenir lesiones' }
  ];

  currentSlide = 0;
  private intervalId!: number;

  ngAfterViewInit() {
    this.startCarousel();
  }

  startCarousel() {
    // Guardamos el ID para luego poder pararlo
    this.intervalId = window.setInterval(() => this.nextSlide(), 5000);
  }

  stopCarousel() {
    // Paramos el autoplay
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  ngOnDestroy() {
    this.stopCarousel();
  }
}
