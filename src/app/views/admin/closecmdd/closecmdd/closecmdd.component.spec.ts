import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosecmddComponent } from './closecmdd.component';

describe('ClosecmddComponent', () => {
  let component: ClosecmddComponent;
  let fixture: ComponentFixture<ClosecmddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosecmddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosecmddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
