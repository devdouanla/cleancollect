import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreerUneAnnonceDeRecyclageComponent } from './creer-une-annonce-de-recyclage.component';

describe('CreerUneAnnonceDeRecyclageComponent', () => {
  let component: CreerUneAnnonceDeRecyclageComponent;
  let fixture: ComponentFixture<CreerUneAnnonceDeRecyclageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerUneAnnonceDeRecyclageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreerUneAnnonceDeRecyclageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
