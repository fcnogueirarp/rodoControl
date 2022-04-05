import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrcComponent } from './ctrc.component';

describe('CtrcComponent', () => {
  let component: CtrcComponent;
  let fixture: ComponentFixture<CtrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
