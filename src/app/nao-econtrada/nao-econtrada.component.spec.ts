import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEcontradaComponent } from './nao-econtrada.component';

describe('NaoEcontradaComponent', () => {
  let component: NaoEcontradaComponent;
  let fixture: ComponentFixture<NaoEcontradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoEcontradaComponent]
    });
    fixture = TestBed.createComponent(NaoEcontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
