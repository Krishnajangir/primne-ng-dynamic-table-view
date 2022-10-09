import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpTableComponent } from './op-table.component';

describe('OpTableComponent', () => {
  let component: OpTableComponent;
  let fixture: ComponentFixture<OpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
