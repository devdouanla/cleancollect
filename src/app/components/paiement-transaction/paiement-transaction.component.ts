import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonRow, IonCol, IonText, IonCard, IonCardContent,
  IonImg, IonBadge, IonRadio, IonIcon, IonButton, IonLabel,
  IonFooter, IonRadioGroup
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, radioButtonOnOutline } from 'ionicons/icons';

@Component({
  selector: 'app-paiement-transaction',
  templateUrl: './paiement-transaction.component.html',
  styleUrls: ['./paiement-transaction.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonContent, IonRow, IonCol, IonText, IonCard, IonCardContent,
    IonImg, IonBadge, IonRadio, IonIcon, IonButton, IonLabel,
    IonFooter, IonRadioGroup
  ]
})
export class PaiementTransactionComponent implements OnInit {

  selectedPayment = 'mtn';

  transaction = {
    name: 'Bouteilles plastiques',
    weight: '20 KG',
    price: 5000,
    imageUrl: 'https://picsum.photos/id/1060/200/200'
  };

  constructor(private router: Router) {
    addIcons({ lockClosedOutline, radioButtonOnOutline });
  }

  selectPayment(method: string): void { this.selectedPayment = method; }

  /** "Payer maintenant" → suivi de la collecte */
  payerMaintenant(): void {
    console.log('Paiement via :', this.selectedPayment);
    this.router.navigate(['/tabs/suivi_collecte']);
  }

  ngOnInit() {}
}