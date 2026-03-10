import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton,
  IonTitle, IonContent, IonFooter, IonButton,
  IonRow, IonCol, IonText, IonImg, IonIcon,
  IonCard, IonCardContent, IonLabel,
  IonTabBar, IonTabButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  createOutline, camera, personOutline, callOutline,
  mailOutline, walletOutline, cardOutline,
  notificationsOutline, globeOutline, helpCircleOutline,
  chevronForwardOutline, logOutOutline, homeOutline,
  peopleOutline, carOutline, person
} from 'ionicons/icons';

interface PaiementMethode {
  key: string;
  name: string;
  mask: string;
  icon: string;
}

interface AppSetting {
  key: string;
  label: string;
  icon: string;
  value?: string;
}

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonButtons, IonBackButton,
    IonTitle, IonContent, IonFooter, IonButton,
    IonRow, IonCol, IonText, IonImg, IonIcon,
    IonCard, IonCardContent, IonLabel,
    IonTabBar, IonTabButton
  ]
})
export class ProfilUtilisateurComponent implements OnInit {

  user = {
    name:        'Jean Ndzié',
    memberSince: 'Janvier 2023',
    city:        'Yaoundé',
    phone:       '+237 6xx xxx xxx',
    email:       'jean.ndzie@example.cm',
    avatarUrl:   'https://picsum.photos/id/1005/400/400'
  };

  paiements: PaiementMethode[] = [
    { key: 'orange', name: 'Orange Money',    mask: '**** 456', icon: 'card-outline'   },
    { key: 'mtn',    name: 'MTN Mobile Money', mask: '**** 789', icon: 'wallet-outline' }
  ];

  appSettings: AppSetting[] = [
    { key: 'notif',   label: 'Notifications', icon: 'notifications-outline', value: 'Activé'   },
    { key: 'langue',  label: 'Langue',         icon: 'globe-outline',         value: 'Français' },
    { key: 'support', label: 'Aide & Support', icon: 'help-circle-outline',   value: ''         }
  ];

  constructor(private router: Router) {
    addIcons({
      createOutline, camera, personOutline, callOutline,
      mailOutline, walletOutline, cardOutline,
      notificationsOutline, globeOutline, helpCircleOutline,
      chevronForwardOutline, logOutOutline, homeOutline,
      peopleOutline, carOutline, person
    });
  }

  editerProfil(): void        { console.log('Éditer profil'); }
  changerPhoto(): void        { console.log('Changer photo'); }
  editerChamp(c: string): void { console.log('Éditer champ :', c); }
  ajouterPaiement(): void     { console.log('Ajouter paiement'); }
  voirPaiement(m: PaiementMethode): void { console.log('Voir paiement :', m.name); }
  ouvrirSetting(s: AppSetting): void     { console.log('Setting :', s.label); }

  seDeconnecter(): void {
    console.log('Déconnexion');
    // this.router.navigate(['/splash-screen-cleancollect']);
  }

  ngOnInit() {}
}