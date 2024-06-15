import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectRecolorComponent } from './object-recolor.component';

describe('ObjectRecolorComponent', () => {
  let component: ObjectRecolorComponent;
  let fixture: ComponentFixture<ObjectRecolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectRecolorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectRecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
