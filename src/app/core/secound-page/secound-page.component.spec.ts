import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundPageComponent } from './secound-page.component';

describe('SecoundPageComponent', () => {
  let component: SecoundPageComponent;
  let fixture: ComponentFixture<SecoundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecoundPageComponent]
    });
    fixture = TestBed.createComponent(SecoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
