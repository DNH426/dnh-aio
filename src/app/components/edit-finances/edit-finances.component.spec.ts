import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinancesComponent } from './edit-finances.component';

describe('EditFinancesComponent', () => {
  let component: EditFinancesComponent;
  let fixture: ComponentFixture<EditFinancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFinancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
