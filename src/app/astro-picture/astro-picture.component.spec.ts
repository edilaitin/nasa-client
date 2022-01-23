import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroPictureComponent } from './astro-picture.component';

describe('AstroPictureComponent', () => {
  let component: AstroPictureComponent;
  let fixture: ComponentFixture<AstroPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
