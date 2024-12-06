import { Component } from '@angular/core';
import { UserStoryComponent } from "./components/user-story/user-story.component";
import { TestDetailsComponent } from "./components/test-details/test-details.component";

@Component({
  selector: 'app-tests-verification',
  imports: [UserStoryComponent, TestDetailsComponent],
  templateUrl: './tests-verification.component.html',
  styleUrl: './tests-verification.component.css'
})
export class TestsVerificationComponent {

}
