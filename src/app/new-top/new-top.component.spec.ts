import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTopComponent } from './new-top.component';

describe('NewTopComponent', () => {
  let component: NewTopComponent;
  let fixture: ComponentFixture<NewTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
