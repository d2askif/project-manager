import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVariationStatusComponent } from './create-variation-status.component';

describe('CreateVariationStatusComponent', () => {
  let component: CreateVariationStatusComponent;
  let fixture: ComponentFixture<CreateVariationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVariationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVariationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
