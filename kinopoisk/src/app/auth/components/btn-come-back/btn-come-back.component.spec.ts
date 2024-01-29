import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComeBackComponent } from './btn-come-back.component';

describe('BtnComeBackComponent', () => {
  let component: BtnComeBackComponent;
  let fixture: ComponentFixture<BtnComeBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnComeBackComponent],
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(BtnComeBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
