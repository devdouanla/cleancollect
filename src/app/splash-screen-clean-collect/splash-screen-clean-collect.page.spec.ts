import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenCleanCollectPage } from './splash-screen-clean-collect.page';

describe('SplashScreenCleanCollectPage', () => {
  let component: SplashScreenCleanCollectPage;
  let fixture: ComponentFixture<SplashScreenCleanCollectPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(SplashScreenCleanCollectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
