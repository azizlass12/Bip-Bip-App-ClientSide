import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCmdComponent } from './create-cmd.component';

describe('CreateCmdComponent', () => {
  let component: CreateCmdComponent;
  let fixture: ComponentFixture<CreateCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
