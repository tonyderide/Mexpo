import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauOeuvreComponent } from './tableau-oeuvre.component';

describe('TableauOeuvreComponent', () => {
  let component: TableauOeuvreComponent;
  let fixture: ComponentFixture<TableauOeuvreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauOeuvreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauOeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
