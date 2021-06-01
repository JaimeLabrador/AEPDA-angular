import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderImagesComponent } from './home-header-images.component';

describe('HomeHeaderImagesComponent', () => {
  let component: HomeHeaderImagesComponent;
  let fixture: ComponentFixture<HomeHeaderImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeaderImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
