import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityPlaygroundComponent } from './capacity-playground.component';

describe('CapacityPlaygroundComponent', () => {
  let component: CapacityPlaygroundComponent;
  let fixture: ComponentFixture<CapacityPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapacityPlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CapacityPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
