import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashbordComponent } from './buyer-dashbord.component';

describe('BuyerDashbordComponent', () => {
  let component: BuyerDashbordComponent;
  let fixture: ComponentFixture<BuyerDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerDashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
