import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoffreComponent } from './setoffre.component';

describe('SetoffreComponent', () => {
  let component: SetoffreComponent;
  let fixture: ComponentFixture<SetoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
