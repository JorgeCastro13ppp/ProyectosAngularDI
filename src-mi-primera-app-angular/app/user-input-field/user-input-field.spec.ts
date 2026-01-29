import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputField } from './user-input-field';

describe('UserInputField', () => {
  let component: UserInputField;
  let fixture: ComponentFixture<UserInputField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInputField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInputField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
