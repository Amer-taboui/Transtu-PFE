import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateligneComponent } from './add-ligne.component';

describe('AddligneComponent', () => {
  let component: CreateligneComponent;
  let fixture: ComponentFixture<CreateligneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateligneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
