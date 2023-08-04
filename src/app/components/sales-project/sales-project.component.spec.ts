import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesProjectComponent } from './sales-project.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectService } from 'src/app/services/api/project.service';

describe('SalesProjectComponent', () => {
  let component: SalesProjectComponent;
  let fixture: ComponentFixture<SalesProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesProjectComponent],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      providers: [ProjectService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
