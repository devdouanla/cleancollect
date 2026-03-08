import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnboardingPaiementSecuriseComponent } from './onboarding-paiement-securise.component';

describe('OnboardingPaiementSecuriseComponent', () => {
  let component: OnboardingPaiementSecuriseComponent;
  let fixture: ComponentFixture<OnboardingPaiementSecuriseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OnboardingPaiementSecuriseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingPaiementSecuriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
