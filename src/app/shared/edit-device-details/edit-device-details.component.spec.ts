import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceDetailsComponent } from './edit-device-details.component';

describe('EditDeviceDetailsComponent', () => {
  let component: EditDeviceDetailsComponent;
  let fixture: ComponentFixture<EditDeviceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeviceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
