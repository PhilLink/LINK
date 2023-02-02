import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyIntroComponent } from './academy-intro.component';

describe('AcademyIntroComponent', () => {
  let component: AcademyIntroComponent;
  let fixture: ComponentFixture<AcademyIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademyIntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcademyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
