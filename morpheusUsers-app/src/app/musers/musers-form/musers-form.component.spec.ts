import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusersFormComponent } from './musers-form.component';

describe('MusersFormComponent', () => {
  let component: MusersFormComponent;
  let fixture: ComponentFixture<MusersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
