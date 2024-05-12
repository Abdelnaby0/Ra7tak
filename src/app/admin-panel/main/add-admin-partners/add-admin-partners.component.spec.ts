import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminPartnersComponent } from './add-admin-partners.component';

describe('AddAdminPartnersComponent', () => {
  let component: AddAdminPartnersComponent;
  let fixture: ComponentFixture<AddAdminPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdminPartnersComponent]
    });
    fixture = TestBed.createComponent(AddAdminPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
