import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProvidersComponent } from './content-providers.component';

describe('ContentProvidersComponent', () => {
  let component: ContentProvidersComponent;
  let fixture: ComponentFixture<ContentProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProvidersComponent],
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(ContentProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
