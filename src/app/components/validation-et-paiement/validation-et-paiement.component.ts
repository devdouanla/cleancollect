import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton,
  IonTitle, IonContent, IonFooter,
  IonRow, IonCol, IonText, IonImg, IonIcon,
  IonButton, IonCard, IonCardContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  refreshCircleOutline, bagOutline,
  cameraOutline, checkmarkCircle,
  arrowForwardOutline, checkmarkDoneCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-validation-et-paiement',
  templateUrl: './validation-et-paiement.component.html',
  styleUrls: ['./validation-et-paiement.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonButtons, IonBackButton,
    IonTitle, IonContent, IonFooter,
    IonRow, IonCol, IonText, IonImg, IonIcon,
    IonButton, IonCard, IonCardContent
  ]
})
export class ValidationEtPaiementComponent implements OnInit {

  photoUrl: string | null = null;

  collecte = {
    clientName:  'Jean Ndzié',
    clientBadge: 'Client Premium',
    type:        'Plastique',
    volume:      '3 sacs'
  };

  paiement = {
    label:         'Paiement reçu',
    amount:        2500,
    method:        'Mobile Money',
    transactionId: 'CC-82910-MOBILE'
  };

  constructor(private router: Router) {
    addIcons({
      refreshCircleOutline, bagOutline,
      cameraOutline, checkmarkCircle,
      arrowForwardOutline, checkmarkDoneCircleOutline
    });
  }

  prendrePhoto(): void {
    // Simuler une photo prise (en prod : utiliser Capacitor Camera plugin)
    this.photoUrl = 'https://picsum.photos/id/1060/700/400';
    console.log('Photo prise');
  }

  confirmerRecuperation(): void {
    console.log('Récupération confirmée');
    // this.router.navigate(['/tabs/collecte-terminee']);
  }

  terminerMission(): void {
    console.log('Mission terminée');
    // this.router.navigate(['/tabs/missions-disponibles']);
  }

  ngOnInit() {}
}