import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, callOutline, lockClosedOutline, eyeOutline, locationOutline, cashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-connexion-clean-collect',
  templateUrl: './connexion-clean-collect.component.html',
  styleUrls: ['./connexion-clean-collect.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons, IonIcon]
})
export class ConnexionCleanCollectComponent implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline, callOutline, lockClosedOutline, eyeOutline, locationOutline, cashOutline });
  }

  ngOnInit() { }
}
