import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonToggle, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonToggle,
    IonSegment,
    IonSegmentButton,
    RouterLink,
    TranslatePipe,
  ],
})
export class AppComponent implements OnInit {
  isDark = false;
  currentLang: 'fr' | 'en' = 'fr';

  constructor(
    private theme: ThemeService,
    private language: LanguageService,
  ) {}

  ngOnInit(): void {
    this.theme.init();
    this.isDark = this.theme.isDark();
    this.currentLang = this.language.getCurrentLang();
  }

  onThemeChange(checked: boolean): void {
    this.theme.setTheme(checked ? 'dark' : 'light');
    this.isDark = checked;
  }

  onLanguageChange(lang: 'fr' | 'en'): void {
    this.language.setLanguage(lang);
    this.currentLang = lang;
  }
}
