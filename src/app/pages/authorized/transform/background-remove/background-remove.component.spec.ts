import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundRemoveComponent } from './background-remove.component';

describe('BackgroundRemoveComponent', () => {
  let component: BackgroundRemoveComponent;
  let fixture: ComponentFixture<BackgroundRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
