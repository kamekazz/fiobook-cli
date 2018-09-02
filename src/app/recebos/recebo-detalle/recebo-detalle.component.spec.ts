import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceboDetalleComponent } from './recebo-detalle.component';

describe('ReceboDetalleComponent', () => {
  let component: ReceboDetalleComponent;
  let fixture: ComponentFixture<ReceboDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceboDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceboDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
