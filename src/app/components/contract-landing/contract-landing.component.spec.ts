import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractLandingComponent } from './contract-landing.component';

describe('ContractLandingComponent', () => {
  let component: ContractLandingComponent;
  let fixture: ComponentFixture<ContractLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
