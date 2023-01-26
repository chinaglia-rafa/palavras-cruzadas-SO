import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDockerComponent } from './character-docker.component';

describe('CharacterDockerComponent', () => {
  let component: CharacterDockerComponent;
  let fixture: ComponentFixture<CharacterDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
