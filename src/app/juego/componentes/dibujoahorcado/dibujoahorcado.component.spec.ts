import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DibujoahorcadoComponent } from './dibujoahorcado.component';

describe('DibujoahorcadoComponent', () => {
  let component: DibujoahorcadoComponent;
  let fixture: ComponentFixture<DibujoahorcadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DibujoahorcadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DibujoahorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
