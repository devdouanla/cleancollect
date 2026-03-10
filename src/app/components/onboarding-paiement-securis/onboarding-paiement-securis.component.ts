import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon, IonButton, IonCol, IonRow, IonGrid, IonText, IonCard, IonImg } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-onboarding-paiement-securis',
  templateUrl: './onboarding-paiement-securis.component.html',
  styleUrls: ['./onboarding-paiement-securis.component.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton, IonCol, IonRow, IonGrid, IonText, IonCard, IonImg]
})
export class OnboardingPaiementSecurisComponent {

  constructor( private router: Router ) {
    addIcons({ arrowBackOutline });
  }
  goToMarket() {
    // Utilisez router.navigate() avec le chemin de votre route
    this.router.navigate(['/marche-du-recyclage']);
  }
}