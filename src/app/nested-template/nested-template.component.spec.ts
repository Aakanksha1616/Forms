import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTemplateComponent } from './nested-template.component';

describe('NestedTemplateComponent', () => {
  let component: NestedTemplateComponent;
  let fixture: ComponentFixture<NestedTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedTemplateComponent]
    });
    fixture = TestBed.createComponent(NestedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
