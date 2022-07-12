import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusersListComponent } from './musers-list.component';

describe('MusersListComponent', () => {
  let component: MusersListComponent;
  let fixture: ComponentFixture<MusersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
