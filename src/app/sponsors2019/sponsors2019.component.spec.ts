import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sponsors2019Component } from './sponsors2019.component';

describe('Sponsors2019Component', () => {
  let component: Sponsors2019Component;
  let fixture: ComponentFixture<Sponsors2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sponsors2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sponsors2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
