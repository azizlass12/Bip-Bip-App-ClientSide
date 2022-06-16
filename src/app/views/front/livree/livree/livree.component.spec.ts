import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreeComponent } from './livree.component';

describe('LivreeComponent', () => {
  let component: LivreeComponent;
  let fixture: ComponentFixture<LivreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
