import { TestBed } from '@angular/core/testing';

import { CharacterGuard } from './character.guard';

describe('CharacterGuard', () => {
  let guard: CharacterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CharacterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
