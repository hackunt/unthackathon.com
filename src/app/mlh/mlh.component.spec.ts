import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlhComponent } from './mlh.component';

describe('MlhComponent', () => {
  let component: MlhComponent;
  let fixture: ComponentFixture<MlhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
