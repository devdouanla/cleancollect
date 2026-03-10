import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonRow, IonCol, IonText, IonCard, IonCardContent,
  IonButton, IonIcon, IonImg, IonTextarea, IonLabel, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, navigate, arrowForwardOutline } from 'ionicons/icons';

interface CalendarDay { date: Date; currentMonth: boolean; }

@Component({
  selector: 'app-prendre-rendez-vous',
  templateUrl: './prendre-rendez-vous.component.html',
  styleUrls: ['./prendre-rendez-vous.component.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonContent, IonRow, IonCol, IonText, IonCard, IonCardContent,
    IonButton, IonIcon, IonImg, IonTextarea, IonLabel, IonFooter
  ]
})
export class PrendreRendezVousComponent implements OnInit {

  weekDays = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
  currentDate   = new Date(2023, 9, 1);
  selectedDate  = new Date(2023, 9, 5);
  calendarWeeks: CalendarDay[][] = [];
  currentMonthLabel = '';

  selectedHour   = 9;
  selectedMinute = 30;
  allHours   = Array.from({ length: 24 }, (_, i) => i);
  allMinutes = [0, 15, 30, 45];

  get visibleHours(): number[] {
    const i = this.allHours.indexOf(this.selectedHour);
    return [this.allHours[(i - 1 + 24) % 24], this.allHours[i], this.allHours[(i + 1) % 24]];
  }
  get visibleMinutes(): number[] {
    const i = this.allMinutes.indexOf(this.selectedMinute);
    const l = this.allMinutes.length;
    return [this.allMinutes[(i - 1 + l) % l], this.allMinutes[i], this.allMinutes[(i + 1) % l]];
  }

  selectedLocation  = 'Bastos, Yaoundé, Cameroun';
  locationPrecision = '';

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, chevronForwardOutline, navigate, arrowForwardOutline });
  }

  ngOnInit() { this.buildCalendar(); }

  buildCalendar(): void {
    const year = this.currentDate.getFullYear(), month = this.currentDate.getMonth();
    const months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    this.currentMonthLabel = `${months[month]} ${year}`;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrev  = new Date(year, month, 0).getDate();
    const days: CalendarDay[] = [];
    for (let i = firstDay - 1; i >= 0; i--) days.push({ date: new Date(year, month - 1, daysInPrev - i), currentMonth: false });
    for (let d = 1; d <= daysInMonth; d++) days.push({ date: new Date(year, month, d), currentMonth: true });
    const rem = 7 - (days.length % 7);
    if (rem < 7) for (let d = 1; d <= rem; d++) days.push({ date: new Date(year, month + 1, d), currentMonth: false });
    this.calendarWeeks = [];
    for (let i = 0; i < days.length; i += 7) this.calendarWeeks.push(days.slice(i, i + 7));
  }

  prevMonth(): void { this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1); this.buildCalendar(); }
  nextMonth(): void { this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1); this.buildCalendar(); }
  selectDay(date: Date): void { this.selectedDate = new Date(date); }
  isSelectedDay(date: Date): boolean { return date.toDateString() === this.selectedDate.toDateString(); }
  isTodayDay(date: Date): boolean { return date.toDateString() === new Date().toDateString(); }
  selectHour(h: number): void { this.selectedHour = h; }
  selectMinute(m: number): void { this.selectedMinute = m; }

  /** "Envoyer la proposition" → confirmer-rendez-vous */
  sendProposal(): void {
    console.log('RDV proposé', { date: this.selectedDate, heure: `${this.selectedHour}h${String(this.selectedMinute).padStart(2,'0')}`, lieu: this.selectedLocation });
    this.router.navigate(['/tabs/confirmer_rendez_vous']);
  }
}