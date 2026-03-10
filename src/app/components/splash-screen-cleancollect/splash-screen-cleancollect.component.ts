import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent, IonGrid, IonRow, IonCol,
  IonAvatar, IonIcon, IonProgressBar, IonBadge, IonItem, IonImg,
  IonText, IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { syncCircle, leaf, locationOutline, cardOutline, earth } from 'ionicons/icons';

@Component({
  selector: 'app-splash-screen-cleancollect',
  templateUrl: './splash-screen-cleancollect.component.html',
  styleUrls: ['./splash-screen-cleancollect.component.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonGrid, IonRow, IonCol,
    IonAvatar, IonIcon, IonProgressBar, IonText, IonLabel, IonBadge, IonItem, IonImg
  ]
})
export class SplashScreenCleancollectComponent implements OnInit {

  progress = 0;

  constructor(private router: Router) {
    addIcons({ syncCircle, leaf, locationOutline, cardOutline, earth });
  }

  ngOnInit() {
    const interval = setInterval(() => {
      this.progress += 0.02;
      if (this.progress >= 1) {
        this.progress = 1;
        clearInterval(interval);
        setTimeout(() => {
          console.log("Chargement termine");
          this.router.navigate(['/onboarding-paiement-securis']);
        }, 800);
      }
    }, 80);

  }
}