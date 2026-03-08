import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { leafOutline, locationOutline, cashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({ leafOutline, locationOutline, cashOutline });
  }
}
