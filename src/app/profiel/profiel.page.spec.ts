import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfielPage } from './profiel.page';

describe('ProfielPage', () => {
  let component: ProfielPage;
  let fixture: ComponentFixture<ProfielPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ProfielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
