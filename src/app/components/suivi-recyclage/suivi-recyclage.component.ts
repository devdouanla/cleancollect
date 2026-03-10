import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonRow, IonCol, IonText, IonCard, IonCardContent,
  IonImg, IonIcon, IonButton, IonLabel, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkOutline, timeOutline, location, shieldCheckmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-suivi-recyclage',
  templateUrl: './suivi-recyclage.component.html',
  styleUrls: ['./suivi-recyclage.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonContent, IonRow, IonCol, IonText, IonCard, IonCardContent,
    IonImg, IonIcon, IonButton, IonLabel, IonFooter
  ]
})
export class SuiviRecyclageComponent implements OnInit {

  transaction = {
    title:    'Plastique PET (50kg)',
    seller:   'Douala Recyclage Sarl',
    price:    25000,
    imageUrl: 'https://picsum.photos/id/1060/200/200',
    address:  'Akwa, face Boutique Clean, Douala'
  };

  recapDetails = [
    { key: 'ID Transaction', value: '#TX-99201-CMR'          },
    { key: 'Poids total',    value: '50.0 kg'                },
    { key: 'Type de déchet', value: 'Plastique Haute Densité'}
  ];

  constructor(private router: Router) {
    addIcons({ checkmarkOutline, timeOutline, location, shieldCheckmarkOutline });
  }

  /** "Confirmer réception" → collecte terminée + notation */
  confirmerReception(): void {
    this.router.navigate(['/tabs/collecte_termine']);
  }

  ngOnInit() {}
}