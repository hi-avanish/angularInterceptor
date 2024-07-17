import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTranditionalComponent } from './items-tranditional.component';

describe('ItemsTranditionalComponent', () => {
  let component: ItemsTranditionalComponent;
  let fixture: ComponentFixture<ItemsTranditionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsTranditionalComponent]
    });
    fixture = TestBed.createComponent(ItemsTranditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
