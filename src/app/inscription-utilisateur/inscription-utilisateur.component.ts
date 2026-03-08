import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, personOutline, mailOutline, eyeOutline, locationOutline, cashOutline, chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: './inscription-utilisateur.component.html',
  styleUrls: ['./inscription-utilisateur.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons, IonIcon]
})
export class InscriptionUtilisateurComponent implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline, personOutline, mailOutline, eyeOutline, locationOutline, cashOutline, chevronForwardOutline });
  }

  ngOnInit() { }
}
