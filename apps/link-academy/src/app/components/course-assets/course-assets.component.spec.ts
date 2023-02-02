import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssetsComponent } from './course-assets.component';

describe('CourseAssetsComponent', () => {
  let component: CourseAssetsComponent;
  let fixture: ComponentFixture<CourseAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAssetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
