import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-collecte',
  templateUrl: './collecte.page.html',
  styleUrls: ['./collecte.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
  ],
})
export class CollectePage {}

