import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonRow, IonCol, IonText, IonIcon, IonCard,
  IonCardContent, IonButton, IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkOutline, refreshCircleOutline, location, calendarOutline, mapOutline } from 'ionicons/icons';

@Component({
  selector: 'app-confirmer-rendez-vous',
  templateUrl: './confirmer-rendez-vous.component.html',
  styleUrls: ['./confirmer-rendez-vous.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonContent, IonRow, IonCol, IonText, IonIcon, IonCard,
    IonCardContent, IonButton, IonLabel
    // Pas de IonFooter/IonTabBar : géré par TabsComponent
  ]
})
export class ConfirmerRendezVousComponent implements OnInit {

  rdv = {
    buyer:    'Rodrigue Ndzi',
    seller:   'Mireille Ndzi',
    location: 'Yaoundé – Bastos',
    dateHeure:'15 mars – 16h',
    zone:     'Bastos, Yaoundé'
  };

  constructor(private router: Router) {
    addIcons({ checkmarkOutline, refreshCircleOutline, location, calendarOutline, mapOutline });
  }

  /** "Procéder au paiement" → paiement-transaction */
  procederPaiement(): void {
    this.router.navigate(['/tabs/paiement_transaction']);
  }

  /** "Annuler le rendez-vous" → retour au marché */
  annulerRdv(): void {
    this.router.navigate(['/tabs/marche-du-recyclage']);
  }

  ngOnInit() {}
}