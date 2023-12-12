import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCenterComponent } from './window-dashboard.component';

describe('WindowCenterComponent', () => {
  let component: WindowCenterComponent;
  let fixture: ComponentFixture<WindowCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowCenterComponent]
    });
    fixture = TestBed.createComponent(WindowCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
