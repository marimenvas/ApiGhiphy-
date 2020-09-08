import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifImageComponent } from './gif-image.component';

describe('GifImageComponent', () => {
  let component: GifImageComponent;
  let fixture: ComponentFixture<GifImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
