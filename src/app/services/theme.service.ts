import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'cleancollect_theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  init(): void {
    const theme = this.getTheme();
    document.body.classList.toggle('dark', theme === 'dark');
  }

  getTheme(): ThemeMode {
    if (typeof localStorage === 'undefined') return 'light';
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    return stored === 'dark' || stored === 'light' ? stored : 'light';
  }

  setTheme(theme: ThemeMode): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, theme);
    }

    document.body.classList.toggle('dark', theme === 'dark');
  }

  isDark(): boolean {
    return this.getTheme() === 'dark';
  }

  toggleTheme(): ThemeMode {
    const next: ThemeMode = this.isDark() ? 'light' : 'dark';
    this.setTheme(next);
    return next;
  }
}