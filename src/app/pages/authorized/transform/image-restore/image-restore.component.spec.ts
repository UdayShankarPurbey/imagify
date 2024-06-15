import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRestoreComponent } from './image-restore.component';

describe('ImageRestoreComponent', () => {
  let component: ImageRestoreComponent;
  let fixture: ComponentFixture<ImageRestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageRestoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageRestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
