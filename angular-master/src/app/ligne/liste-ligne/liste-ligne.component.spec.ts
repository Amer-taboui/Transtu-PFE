import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ligneListComponent } from './liste-ligne.component';

describe('EmployeeComponent', () => {
  let component: ligneListComponent;
  let fixture: ComponentFixture<ligneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ligneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ligneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
