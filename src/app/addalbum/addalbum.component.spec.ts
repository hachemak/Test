import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalbumComponent } from './addalbum.component';

describe('AddalbumComponent', () => {
  let component: AddalbumComponent;
  let fixture: ComponentFixture<AddalbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddalbumComponent]
    });
    fixture = TestBed.createComponent(AddalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
