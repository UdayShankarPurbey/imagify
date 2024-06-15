import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectRemoveComponent } from './object-remove.component';

describe('ObjectRemoveComponent', () => {
  let component: ObjectRemoveComponent;
  let fixture: ComponentFixture<ObjectRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
