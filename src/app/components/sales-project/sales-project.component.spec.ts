import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesProjectComponent } from './sales-project.component';

describe('SalesProjectComponent', () => {
  let component: SalesProjectComponent;
  let fixture: ComponentFixture<SalesProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesProjectComponent]
    });
    fixture = TestBed.createComponent(SalesProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
