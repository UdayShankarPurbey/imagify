import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyDataComponent } from './dispaly-data.component';

describe('DispalyDataComponent', () => {
  let component: DispalyDataComponent;
  let fixture: ComponentFixture<DispalyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispalyDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispalyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
