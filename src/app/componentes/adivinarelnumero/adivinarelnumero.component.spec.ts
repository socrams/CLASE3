import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarelnumeroComponent } from './adivinarelnumero.component';

describe('AdivinarelnumeroComponent', () => {
  let component: AdivinarelnumeroComponent;
  let fixture: ComponentFixture<AdivinarelnumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinarelnumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinarelnumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
