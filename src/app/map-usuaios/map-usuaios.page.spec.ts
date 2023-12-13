import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapUsuaiosPage } from './map-usuaios.page';

describe('MapUsuaiosPage', () => {
  let component: MapUsuaiosPage;
  let fixture: ComponentFixture<MapUsuaiosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapUsuaiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
