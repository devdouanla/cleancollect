import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnboardingPaiementSecurisComponent } from './onboarding-paiement-securis.component';

describe('OnboardingPaiementSecurisComponent', () => {
  let component: OnboardingPaiementSecurisComponent;
  let fixture: ComponentFixture<OnboardingPaiementSecurisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingPaiementSecurisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingPaiementSecurisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
