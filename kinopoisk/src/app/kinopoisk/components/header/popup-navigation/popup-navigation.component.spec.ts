import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNavigationComponent } from './popup-navigation.component';

describe('PopupNavigationComponent', () => {
  let component: PopupNavigationComponent;
  let fixture: ComponentFixture<PopupNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupNavigationComponent],
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(PopupNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
