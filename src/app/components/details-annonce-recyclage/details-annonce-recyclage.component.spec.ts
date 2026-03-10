import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsAnnonceRecyclageComponent } from './details-annonce-recyclage.component';

describe('DetailsAnnonceRecyclageComponent', () => {
  let component: DetailsAnnonceRecyclageComponent;
  let fixture: ComponentFixture<DetailsAnnonceRecyclageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAnnonceRecyclageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsAnnonceRecyclageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
