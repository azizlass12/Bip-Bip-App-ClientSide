import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentComponent } from './attent.component';

describe('AttentComponent', () => {
  let component: AttentComponent;
  let fixture: ComponentFixture<AttentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
