import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageSelectorComponent } from './stage-selector.component';

describe('StageSelectorComponent', () => {
  let component: StageSelectorComponent;
  let fixture: ComponentFixture<StageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
