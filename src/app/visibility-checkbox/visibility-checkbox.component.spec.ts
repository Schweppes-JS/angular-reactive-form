import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityCheckboxComponent } from './visibility-checkbox.component';

describe('VisibilityCheckboxComponent', () => {
  let component: VisibilityCheckboxComponent;
  let fixture: ComponentFixture<VisibilityCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibilityCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibilityCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
