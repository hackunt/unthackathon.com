import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSVPComponent } from './rsvpcomponent.component';

describe('RSVPComponent', () => {
  let component: RSVPComponent;
  let fixture: ComponentFixture<RSVPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSVPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
