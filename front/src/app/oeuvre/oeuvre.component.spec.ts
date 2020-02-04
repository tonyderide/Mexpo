import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeuvreComponent } from './oeuvre.component';

describe('OeuvreComponent', () => {
  let component: OeuvreComponent;
  let fixture: ComponentFixture<OeuvreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeuvreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
