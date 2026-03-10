import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonContent,
  IonRow, IonCol, IonText, IonImg,
  IonCard, IonCardContent, IonIcon,
  IonToggle, IonList, IonBadge,
  IonLabel, IonFab, IonFabButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cashOutline,
  refreshCircleOutline,
  locationOutline,
  trashOutline,
  newspaperOutline
} from 'ionicons/icons';

interface Mission {
  id: number;
  name: string;
  location: string;
  distance: string;
  price: number;
  type: string;
  active: boolean;
}

@Component({
  selector: 'app-tableau-de-bord-collecteur',
  templateUrl: './tableau-de-bord-collecteur.component.html',
  styleUrls: ['./tableau-de-bord-collecteur.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonContent,
    IonRow, IonCol, IonText, IonImg,
    IonCard, IonCardContent, IonIcon,
    IonToggle, IonList, IonBadge,
    IonLabel, IonFab, IonFabButton
  ]
})
export class TableauDeBordCollecteurComponent implements OnInit {

  isOnline = true;

  missions: Mission[] = [
    {
      id: 1,
      name: 'Famille Eboa',
      location: 'Bonapriso',
      distance: '1.2 km',
      price: 1200,
      type: 'Plastique',
      active: true
    },
    {
      id: 2,
      name: 'Restaurant Le Marseillais',
      location: 'Bali',
      distance: '2.5 km',
      price: 2500,
      type: 'Verre/Mixte',
      active: false
    }
  ];

  constructor() {
    addIcons({
      cashOutline,
      refreshCircleOutline,
      locationOutline,
      trashOutline,
      newspaperOutline
    });
  }

  voirMission(mission: Mission): void {
    console.log('Mission sélectionnée :', mission.name);
  }

  voirTout(): void {
    console.log('Voir toutes les missions');
  }

  voirDemandes(): void {
    console.log('Voir les demandes');
  }

  ngOnInit() {}
}