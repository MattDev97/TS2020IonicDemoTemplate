import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroceryItemDetailPage } from './grocery-item-detail.page';

describe('GroceryItemDetailPage', () => {
  let component: GroceryItemDetailPage;
  let fixture: ComponentFixture<GroceryItemDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryItemDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroceryItemDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
