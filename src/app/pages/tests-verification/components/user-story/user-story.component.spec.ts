import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryComponent } from './user-story.component';

describe('UserStoryComponent', () => {
  let component: UserStoryComponent;
  let fixture: ComponentFixture<UserStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
