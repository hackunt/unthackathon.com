import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailchimpFormComponent } from './mailchimp-form.component';

describe('MailchimpFormComponent', () => {
  let component: MailchimpFormComponent;
  let fixture: ComponentFixture<MailchimpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailchimpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailchimpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
