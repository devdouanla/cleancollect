import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonButton, IonIcon, IonContent, IonSearchbar, IonChip, IonLabel,
  IonRow, IonCol, IonText, IonBadge, IonList, IonCard, IonImg,
  IonFab, IonFabButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personCircle, grid, flaskOutline, cubeOutline, hammerOutline,
  wineOutline, personOutline, syncCircleOutline, locationOutline, addOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-marche-du-recyclage',
  templateUrl: './marche-du-recyclage.component.html',
  styleUrls: ['./marche-du-recyclage.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
    IonButton, IonIcon, IonContent, IonSearchbar, IonChip, IonLabel,
    IonRow, IonCol, IonText, IonBadge, IonList, IonCard, IonImg,
    IonFab, IonFabButton
    // IonFooter / IonTabBar / IonTabButton supprimés → gérés par TabsComponent
  ]
})
export class MarcheDuRecyclageComponent implements OnInit {

  selectedCategory = 'tous';

  marketItems = [
    { title: 'Plastique PET Mixte',    seller: 'Brice Tchoumi', weight: '500 kg',    location: 'Douala',     price: 75000,  category: 'Plastique', imageUrl: 'https://picsum.photos/id/1015/400/300' },
    { title: "Cartons d'emballage...", seller: 'Sarah Kamdem',  weight: '1.2 Tonnes', location: 'Yaoundé',   price: 120000, category: 'Carton',    imageUrl: 'https://picsum.photos/id/201/400/300'  },
    { title: 'Ferraille et Cuivre',    seller: 'Marc Etoundi',  weight: '300 kg',    location: 'Bafoussam', price: 250000, category: 'Métal',     imageUrl: 'https://picsum.photos/id/180/400/300'  },
    { title: 'Verre pilé (Cullet)',    seller: 'Marie Ngo',     weight: '800 kg',    location: 'Kribi',     price: 95000,  category: 'Verre',     imageUrl: 'https://picsum.photos/id/29/400/300'   }
  ];

  constructor(private router: Router) {
    addIcons({ personCircle, grid, flaskOutline, cubeOutline, hammerOutline, wineOutline, personOutline, syncCircleOutline, locationOutline, addOutline });
  }

  selectCategory(cat: string): void { this.selectedCategory = cat; }

  /** Clic sur une carte annonce → page de détail */
  voirDetail(item: any): void {
    this.router.navigate(['/tabs/details_annonce_recyclage']);
  }

  /** FAB "Publier une annonce" → formulaire de création */
  publierAnnonce(): void {
    this.router.navigate(['/tabs/creer_une_annonce_recyclage']);
  }

  ngOnInit() {}
}