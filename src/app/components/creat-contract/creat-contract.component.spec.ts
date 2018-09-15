import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatContractComponent } from './creat-contract.component';

describe('CreatContractComponent', () => {
  let component: CreatContractComponent;
  let fixture: ComponentFixture<CreatContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
