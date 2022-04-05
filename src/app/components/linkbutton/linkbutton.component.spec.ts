import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkbuttonComponent } from './linkbutton.component';

describe('LinkbuttonComponent', () => {
  let component: LinkbuttonComponent;
  let fixture: ComponentFixture<LinkbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
