import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDetailPageComponent } from './aside-detail-page.component';

describe('AsideDetailPageComponent', () => {
  let component: AsideDetailPageComponent;
  let fixture: ComponentFixture<AsideDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideDetailPageComponent],
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(AsideDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
