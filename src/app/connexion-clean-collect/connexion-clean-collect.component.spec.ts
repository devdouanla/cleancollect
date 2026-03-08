import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnexionCleanCollectComponent } from './connexion-clean-collect.component';

describe('ConnexionCleanCollectComponent', () => {
  let component: ConnexionCleanCollectComponent;
  let fixture: ComponentFixture<ConnexionCleanCollectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConnexionCleanCollectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConnexionCleanCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
