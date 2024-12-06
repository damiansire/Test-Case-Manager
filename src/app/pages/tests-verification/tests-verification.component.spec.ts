import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsVerificationComponent } from './tests-verification.component';

describe('TestsVerificationComponent', () => {
  let component: TestsVerificationComponent;
  let fixture: ComponentFixture<TestsVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
