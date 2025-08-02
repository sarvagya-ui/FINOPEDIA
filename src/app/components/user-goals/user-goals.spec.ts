import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGoals } from './user-goals';

describe('UserGoals', () => {
  let component: UserGoals;
  let fixture: ComponentFixture<UserGoals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGoals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGoals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
