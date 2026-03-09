import { Injectable } from '@angular/core';

export type AppLang = 'fr' | 'en';

const STORAGE_KEY = 'cleancollect_lang';

const TRANSLATIONS: Record<AppLang, Record<string, string>> = {
  fr: {
    'menu.home': 'Accueil',
    'menu.community': 'Communauté',
    'menu.collecte': 'Collecte',
    'menu.profil': 'Profil',
    'menu.theme': 'Thème',
    'menu.darkMode': 'Mode sombre',
    'menu.language': 'Langue',
    'menu.french': 'Français',
    'menu.english': 'English',
  },
  en: {
    'menu.home': 'Home',
    'menu.community': 'Community',
    'menu.collecte': 'Collection',
    'menu.profil': 'Profile',
    'menu.theme': 'Theme',
    'menu.darkMode': 'Dark mode',
    'menu.language': 'Language',
    'menu.french': 'Français',
    'menu.english': 'English',
  },
};

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  getCurrentLang(): AppLang {
    if (typeof localStorage === 'undefined') return 'fr';
    const stored = localStorage.getItem(STORAGE_KEY) as AppLang | null;
    return stored === 'fr' || stored === 'en' ? stored : 'fr';
  }

  setLanguage(lang: AppLang): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }

  get(key: string): string {
    const lang = this.getCurrentLang();
    const map = TRANSLATIONS[lang];
    return map?.[key] ?? key;
  }

  getSupportedLanguages(): { value: AppLang; labelKey: string }[] {
    return [
      { value: 'fr', labelKey: 'menu.french' },
      { value: 'en', labelKey: 'menu.english' },
    ];
  }
}
