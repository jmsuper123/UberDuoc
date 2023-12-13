import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesUsuariosPage } from './viajes-usuarios.page';

describe('ViajesUsuariosPage', () => {
  let component: ViajesUsuariosPage;
  let fixture: ComponentFixture<ViajesUsuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajesUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
