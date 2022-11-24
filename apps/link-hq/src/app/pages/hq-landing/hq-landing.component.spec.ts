import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqLandingComponent } from './hq-landing.component';

describe('HqLandingComponent', () => {
  let component: HqLandingComponent;
  let fixture: ComponentFixture<HqLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HqLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HqLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
