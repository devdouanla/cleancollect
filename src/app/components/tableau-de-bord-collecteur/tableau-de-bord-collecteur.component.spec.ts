import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableauDeBordCollecteurComponent } from './tableau-de-bord-collecteur.component';

describe('TableauDeBordCollecteurComponent', () => {
  let component: TableauDeBordCollecteurComponent;
  let fixture: ComponentFixture<TableauDeBordCollecteurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauDeBordCollecteurComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableauDeBordCollecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
