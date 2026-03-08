import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-onboarding-paiement-securise',
  templateUrl: './onboarding-paiement-securise.component.html',
  styleUrls: ['./onboarding-paiement-securise.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons]
})
export class OnboardingPaiementSecuriseComponent implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() { }
}
