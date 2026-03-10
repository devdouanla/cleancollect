import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonButton, IonIcon, IonContent, IonImg, IonRow, IonCol,
  IonText, IonBadge, IonCard, IonCardContent, IonAvatar, IonLabel, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  shareSocialOutline, bookmarkOutline, bookmark, scaleOutline,
  checkmarkCircle, chevronForwardOutline, location, informationCircle,
  callOutline, chatboxOutline, calendarOutline
} from 'ionicons/icons';

register();

@Component({
  selector: 'app-details-annonce-recyclage',
  templateUrl: './details-annonce-recyclage.component.html',
  styleUrls: ['./details-annonce-recyclage.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonButton, IonIcon, IonContent, IonImg, IonRow, IonCol,
    IonText, IonBadge, IonCard, IonCardContent, IonAvatar, IonLabel, IonFooter
  ]
})
export class DetailsAnnonceRecyclageComponent implements OnInit {

  currentSlide = 0;
  isBookmarked = false;

  annonce = {
    title: 'Recherche bouteilles plastiques',
    price: 6000,
    weight: '30 kg',
    location: 'Yaoundé, Quartier Bastos',
    description: 'Je recherche des bouteilles plastiques propres (PET) pour recyclage. Quantité minimum souhaitée : 10 kg. Le prix est négociable selon la qualité et la propreté des bouteilles.',
    photos: [
      'https://picsum.photos/id/1060/800/500',
      'https://picsum.photos/id/1015/800/500',
      'https://picsum.photos/id/180/800/500',
      'https://picsum.photos/id/201/800/500',
      'https://picsum.photos/id/29/800/500'
    ],
    mapImageUrl: 'https://picsum.photos/id/1016/800/300',
    seller: {
      name: 'Rodrigue Ndzi',
      type: 'Acheteur vérifié',
      city: 'Yaoundé',
      avatarUrl: 'https://picsum.photos/id/1005/200/200'
    }
  };

  constructor(private router: Router) {
    addIcons({ shareSocialOutline, bookmarkOutline, bookmark, scaleOutline, checkmarkCircle, chevronForwardOutline, location, informationCircle, callOutline, chatboxOutline, calendarOutline });
  }

  onSlideChange(event: any): void { this.currentSlide = event.detail[0].activeIndex; }
  toggleBookmark(): void { this.isBookmarked = !this.isBookmarked; }
  viewSellerProfile(): void { console.log('Voir profil vendeur'); }
  share(): void { console.log('Partager annonce'); }
  contact(): void { console.log('Appeler vendeur'); }
  message(): void { console.log('Envoyer message'); }

  /** Bouton "Proposer un rendez-vous" → prendre-rendez-vous */
  proposeRdv(): void {
    this.router.navigate(['/tabs/prendre_rendez_vous']);
  }

  ngOnInit() {}
}