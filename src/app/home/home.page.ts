import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular';
import { DataService } from '../services/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class HomePage {
  posts: any[] = [];

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) {}

  // Se ejecuta cuando la página entra en vista
  ionViewWillEnter() {
    this.loadPosts();
  }

  loadPosts() {
    this.dataService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        console.log('Datos recibidos:', this.posts);
        // Forzamos la detección de cambios para que la vista se actualice
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar los datos:', error);
      },
    });
  }
}
