import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnYandexIdComponent } from './btn-yandex-id.component';

describe('BtnYandexIdComponent', () => {
  let component: BtnYandexIdComponent;
  let fixture: ComponentFixture<BtnYandexIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnYandexIdComponent],
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(BtnYandexIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
