import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SplashScreenCleancollectComponent } from './splash-screen-cleancollect.component';

describe('SplashScreenCleancollectComponent', () => {
  let component: SplashScreenCleancollectComponent;
  let fixture: ComponentFixture<SplashScreenCleancollectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SplashScreenCleancollectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SplashScreenCleancollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
