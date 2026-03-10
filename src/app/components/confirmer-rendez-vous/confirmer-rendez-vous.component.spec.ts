import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmerRendezVousComponent } from './confirmer-rendez-vous.component';

describe('ConfirmerRendezVousComponent', () => {
  let component: ConfirmerRendezVousComponent;
  let fixture: ComponentFixture<ConfirmerRendezVousComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmerRendezVousComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmerRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
