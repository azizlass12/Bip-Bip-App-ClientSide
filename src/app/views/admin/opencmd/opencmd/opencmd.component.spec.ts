import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencmdComponent } from './opencmd.component';

describe('OpencmdComponent', () => {
  let component: OpencmdComponent;
  let fixture: ComponentFixture<OpencmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
