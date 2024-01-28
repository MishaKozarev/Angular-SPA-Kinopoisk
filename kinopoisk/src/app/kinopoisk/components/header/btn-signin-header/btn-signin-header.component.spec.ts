import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSigninHeaderComponent } from './btn-signin-header.component';

describe('BtnSigninHeaderComponent', () => {
  let component: BtnSigninHeaderComponent;
  let fixture: ComponentFixture<BtnSigninHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSigninHeaderComponent],
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(BtnSigninHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
