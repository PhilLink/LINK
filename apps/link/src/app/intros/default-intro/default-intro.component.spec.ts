import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultIntroComponent } from './default-intro.component';

describe('DefaultIntroComponent', () => {
  let component: DefaultIntroComponent;
  let fixture: ComponentFixture<DefaultIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultIntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
