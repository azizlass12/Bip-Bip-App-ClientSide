import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelclientComponent } from './delclient.component';

describe('DelclientComponent', () => {
  let component: DelclientComponent;
  let fixture: ComponentFixture<DelclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
