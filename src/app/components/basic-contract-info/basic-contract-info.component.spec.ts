import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicContractInfoComponent } from './basic-contract-info.component';

describe('BasicContractInfoComponent', () => {
  let component: BasicContractInfoComponent;
  let fixture: ComponentFixture<BasicContractInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicContractInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicContractInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
