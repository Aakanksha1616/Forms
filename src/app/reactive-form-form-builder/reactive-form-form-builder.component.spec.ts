import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFormBuilderComponent } from './reactive-form-form-builder.component';

describe('ReactiveFormFormBuilderComponent', () => {
  let component: ReactiveFormFormBuilderComponent;
  let fixture: ComponentFixture<ReactiveFormFormBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormFormBuilderComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
