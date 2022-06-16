import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacmdComponent } from './datacmd.component';

describe('DatacmdComponent', () => {
  let component: DatacmdComponent;
  let fixture: ComponentFixture<DatacmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
