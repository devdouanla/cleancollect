import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, callOutline, lockClosedOutline, eyeOutline, locationOutline, cashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButtons, IonIcon]
})
export class LoginComponent implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline, callOutline, lockClosedOutline, eyeOutline, locationOutline, cashOutline });
  }

  ngOnInit() { }
}
