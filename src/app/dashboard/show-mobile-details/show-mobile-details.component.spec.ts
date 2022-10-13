import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMobileDetailsComponent } from './show-mobile-details.component';

describe('ShowMobileDetailsComponent', () => {
  let component: ShowMobileDetailsComponent;
  let fixture: ComponentFixture<ShowMobileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMobileDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMobileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
