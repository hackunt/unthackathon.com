import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevcountdownComponent } from './devcountdown.component';

describe('DevcountdownComponent', () => {
  let component: DevcountdownComponent;
  let fixture: ComponentFixture<DevcountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevcountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevcountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
