import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
  IonContent, IonRow, IonCol, IonText, IonCard, IonCardContent,
  IonLabel, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, checkmarkOutline, star, starOutline } from 'ionicons/icons';

@Component({
  selector: 'app-collecte-termine',
  templateUrl: './collecte-termine.component.html',
  styleUrls: ['./collecte-termine.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
    IonContent, IonRow, IonCol, IonText, IonCard, IonCardContent,
    IonLabel, IonFooter
  ]
})
export class CollecteTermineComponent implements OnInit {

  currentRating = 0;
  ratingBars = [
    { stars: 5, percent: 85 },
    { stars: 4, percent: 12 },
    { stars: 3, percent: 3 }
  ];

  constructor(private router: Router) {
    addIcons({ closeOutline, checkmarkOutline, star, starOutline });
  }

  setRating(value: number): void { this.currentRating = value; }

  /** "Laisser un avis" → soumet puis retourne au marché */
  laisserAvis(): void {
    console.log('Avis soumis, note :', this.currentRating);
    this.router.navigate(['/marche-du-recyclage']);
  }

  /** "Retour à l'accueil" → marché principal */
  retourAccueil(): void { this.router.navigate(['/marche-du-recyclage']); }

  /** Bouton × fermer */
  fermer(): void { this.router.navigate(['/marche-du-recyclage']); }

  ngOnInit() { }
}