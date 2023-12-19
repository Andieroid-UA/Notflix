import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCalendarComponent } from './window-calendar.component';

describe('WindowCalendarComponent', () => {
  let component: WindowCalendarComponent;
  let fixture: ComponentFixture<WindowCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowCalendarComponent]
    });
    fixture = TestBed.createComponent(WindowCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
