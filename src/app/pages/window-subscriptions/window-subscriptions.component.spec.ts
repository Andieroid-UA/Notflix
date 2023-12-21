import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowSubscriptionsComponent } from './window-subscriptions.component';

describe('WindowSubscriptionsComponent', () => {
  let component: WindowSubscriptionsComponent;
  let fixture: ComponentFixture<WindowSubscriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowSubscriptionsComponent]
    });
    fixture = TestBed.createComponent(WindowSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
