import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeFillComponent } from './generative-fill.component';

describe('GenerativeFillComponent', () => {
  let component: GenerativeFillComponent;
  let fixture: ComponentFixture<GenerativeFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerativeFillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerativeFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
