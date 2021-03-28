import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SZtyrUIComponent } from './sztyr-ui.component';

describe('SZtyrUIComponent', () => {
  let component: SZtyrUIComponent;
  let fixture: ComponentFixture<SZtyrUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SZtyrUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SZtyrUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
