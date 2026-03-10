import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcheDuRecyclageComponent } from './marche-du-recyclage.component';

describe('MarcheDuRecyclageComponent', () => {
  let component: MarcheDuRecyclageComponent;
  let fixture: ComponentFixture<MarcheDuRecyclageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcheDuRecyclageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcheDuRecyclageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
