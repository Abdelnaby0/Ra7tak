import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminPartnersComponent } from './edit-admin-partners.component';

describe('EditAdminPartnersComponent', () => {
  let component: EditAdminPartnersComponent;
  let fixture: ComponentFixture<EditAdminPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminPartnersComponent]
    });
    fixture = TestBed.createComponent(EditAdminPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
