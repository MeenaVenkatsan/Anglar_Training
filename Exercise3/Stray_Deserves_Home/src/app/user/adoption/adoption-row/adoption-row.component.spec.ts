import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionRowComponent } from './adoption-row.component';

describe('AdoptionRowComponent', () => {
  let component: AdoptionRowComponent;
  let fixture: ComponentFixture<AdoptionRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
