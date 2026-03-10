import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonRow, IonCol, IonText, IonSegment, IonSegmentButton,
  IonLabel, IonCard, IonCardContent, IonIcon, IonSelect, IonSelectOption,
  IonInput, IonTextarea, IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cameraOutline, locateOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-creer-une-annonce-de-recyclage',
  templateUrl: './creer-une-annonce-de-recyclage.component.html',
  styleUrls: ['./creer-une-annonce-de-recyclage.component.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonContent, IonRow, IonCol, IonText, IonSegment, IonSegmentButton,
    IonLabel, IonCard, IonCardContent, IonIcon, IonSelect, IonSelectOption,
    IonInput, IonTextarea, IonButton
  ]
})
export class CreerUneAnnonceDeRecyclageComponent implements OnInit {

  annonceType      = 'vends';
  selectedMaterial = 'plastique';
  quantity: number | null = null;
  price: number | null    = null;
  description             = '';
  location                = 'Akwa, Douala, Cameroun';

  constructor(private router: Router) {
    addIcons({ cameraOutline, locateOutline, arrowForwardOutline });
  }

  addPhoto(): void { console.log('Ajouter une photo'); }

  /** "Publier l'annonce" → retour au marché */
  publishAnnonce(): void {
    console.log('Publier annonce', { type: this.annonceType, material: this.selectedMaterial, quantity: this.quantity, price: this.price });
    this.router.navigate(['/tabs/marche-du-recyclage']);
  }

  ngOnInit() {}
}