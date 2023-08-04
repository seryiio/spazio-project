import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredProjectComponent } from './delivered-project.component';

describe('DeliveredProjectComponent', () => {
  let component: DeliveredProjectComponent;
  let fixture: ComponentFixture<DeliveredProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveredProjectComponent]
    });
    fixture = TestBed.createComponent(DeliveredProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
