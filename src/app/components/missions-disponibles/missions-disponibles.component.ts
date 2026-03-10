import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonButtons, IonButton,
  IonAvatar, IonLabel, IonContent,
  IonGrid, IonRow, IonCol, IonText, IonImg, IonIcon,
  IonChip, IonList, IonCard, IonCardContent, IonBadge
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  leaf, notificationsOutline, locationOutline,
  cubeOutline, checkmarkCircleOutline, optionsOutline,
  refreshCircleOutline, documentOutline
} from 'ionicons/icons';

interface Filter { key: string; label: string; icon: string; }

interface Mission {
  id: number;
  location: string;
  details: string;
  distance: string;
  price: number;
  type: string;
  typeKey: string;
  imageUrl: string;
}

@Component({
  selector: 'app-missions-disponibles',
  templateUrl: './missions-disponibles.component.html',
  styleUrls: ['./missions-disponibles.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonButtons, IonButton,
    IonAvatar, IonLabel, IonContent,
    IonGrid, IonRow, IonCol, IonText, IonImg, IonIcon,
    IonChip, IonList, IonCard, IonCardContent, IonBadge
  ]
})
export class MissionsDisponiblesComponent implements OnInit {

  selectedFilter = 'tout';

  filters: Filter[] = [
    { key: 'tout',      label: 'Tout',       icon: 'options-outline'         },
    { key: 'plastique', label: 'Plastiques',  icon: 'refresh-circle-outline' },
    { key: 'papier',    label: 'Papiers',     icon: 'document-outline'       },
    { key: 'verre',     label: 'Verre',       icon: 'options-outline'        },
  ];

  allMissions: Mission[] = [
    {
      id: 1,
      location: 'Yaoundé - Bastos',
      details: '3 sacs • Gros volume',
      distance: '1.2 km',
      price: 2500,
      type: 'Plastiques',
      typeKey: 'plastique',
      imageUrl: 'https://picsum.photos/id/1060/700/320'
    },
    {
      id: 2,
      location: 'Yaoundé - Omnisport',
      details: '1 sac • Petit volume',
      distance: '0.5 km',
      price: 1200,
      type: 'Papiers',
      typeKey: 'papier',
      imageUrl: 'https://picsum.photos/id/201/700/320'
    },
    {
      id: 3,
      location: 'Yaoundé - Odza',
      details: '5 sacs • Volume important',
      distance: '3.8 km',
      price: 4500,
      type: 'Verre',
      typeKey: 'verre',
      imageUrl: 'https://picsum.photos/id/29/700/320'
    }
  ];

  get filteredMissions(): Mission[] {
    if (this.selectedFilter === 'tout') return this.allMissions;
    return this.allMissions.filter(m => m.typeKey === this.selectedFilter);
  }

  constructor(private router: Router) {
    addIcons({
      leaf, notificationsOutline, locationOutline,
      cubeOutline, checkmarkCircleOutline, optionsOutline,
      refreshCircleOutline, documentOutline
    });
  }

  selectFilter(key: string): void { this.selectedFilter = key; }

  accepterMission(mission: Mission): void {
    console.log('Mission acceptée :', mission.location);
    this.router.navigate(['/collecteur/navigation-collecteur']);
  }

  ngOnInit() {}
}