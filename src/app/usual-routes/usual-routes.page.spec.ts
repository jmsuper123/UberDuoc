import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsualRoutesPage } from './usual-routes.page';

describe('UsualRoutesPage', () => {
  let component: UsualRoutesPage;
  let fixture: ComponentFixture<UsualRoutesPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(UsualRoutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
