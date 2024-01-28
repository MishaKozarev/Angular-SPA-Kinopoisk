import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWatchHeaderComponent } from './btn-watch-header.component';

describe('BtnWatchHeaderComponent', () => {
  let component: BtnWatchHeaderComponent;
  let fixture: ComponentFixture<BtnWatchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnWatchHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnWatchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
