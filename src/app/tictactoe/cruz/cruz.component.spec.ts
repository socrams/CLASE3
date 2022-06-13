import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruzComponent } from './cruz.component';

describe('CruzComponent', () => {
  let component: CruzComponent;
  let fixture: ComponentFixture<CruzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
