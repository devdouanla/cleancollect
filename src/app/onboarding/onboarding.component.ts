import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons]
})
export class OnboardingComponent implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() { }
}
