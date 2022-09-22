import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqSettingsComponent } from './hq-settings.component';

describe('HqSettingsComponent', () => {
  let component: HqSettingsComponent;
  let fixture: ComponentFixture<HqSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HqSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HqSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
