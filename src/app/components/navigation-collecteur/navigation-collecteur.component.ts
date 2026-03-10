import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton,
  IonTitle, IonContent, IonRow, IonCol,
  IonText, IonIcon, IonButton, IonLabel, IonInput
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  searchOutline, addOutline, removeOutline,
  compassOutline, location, navigate,
  callOutline, chatboxOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-navigation-collecteur',
  templateUrl: './navigation-collecteur.component.html',
  styleUrls: ['./navigation-collecteur.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonButtons, IonBackButton,
    IonTitle, IonContent, IonRow, IonCol,
    IonText, IonIcon, IonButton, IonLabel, IonInput
  ]
})
export class NavigationCollecteurComponent implements OnInit {

  eta = '8 min';

  client = {
    name: 'Jean Ndzié',
    status: 'EN ROUTE VERS LE CLIENT'
  };

  constructor(private router: Router) {
    addIcons({
      searchOutline, addOutline, removeOutline,
      compassOutline, location, navigate,
      callOutline, chatboxOutline
    });
  }

  zoomIn(): void  { console.log('Zoom +'); }
  zoomOut(): void { console.log('Zoom -'); }
  centerMap(): void { console.log('Centrer la carte'); }
  appeler(): void { console.log('Appel :', this.client.name); }
  envoyer(): void { console.log('Message à :', this.client.name); }

  jesuisArrive(): void {
    console.log('Collecteur arrivé !');
    // this.router.navigate(['/tabs/collecte-en-cours']);
  }

  ngOnInit() {}
}