import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGridComponent } from './table-grid.component';

describe('TableGridComponent', () => {
  let component: TableGridComponent;
  let fixture: ComponentFixture<TableGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
