import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsSearchComponent } from './google-maps-search.component';

describe('GoogleMapsSearchComponent', () => {
  let component: GoogleMapsSearchComponent;
  let fixture: ComponentFixture<GoogleMapsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
