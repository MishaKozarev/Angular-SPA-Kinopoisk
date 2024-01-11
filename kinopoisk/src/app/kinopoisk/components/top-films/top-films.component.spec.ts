import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFilmsComponent } from './top-films.component';

describe('TopFilmsComponent', () => {
  let component: TopFilmsComponent;
  let fixture: ComponentFixture<TopFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFilmsComponent],
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(TopFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
