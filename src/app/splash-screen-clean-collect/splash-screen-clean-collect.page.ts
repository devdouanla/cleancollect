import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { leafOutline, locationOutline, cashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-splash-screen-clean-collect',
  templateUrl: 'splash-screen-clean-collect.page.html',
  styleUrls: ['splash-screen-clean-collect.page.scss'],
  imports: [IonContent, IonIcon],
})
export class SplashScreenCleanCollectPage {
  constructor() {
    addIcons({ leafOutline, locationOutline, cashOutline });
  }
}
