import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  techniques = [
    {
      title: 'Reacting to changes from @Inputs',
      link: 'inputs'
    },
    {
      title: 'Setting properties with @ViewChild',
      link: 'view-child'
    },
    {
      title: 'Using BehaviorSubjects in services',
      link: 'behavior-subjects'
    },
    {
      title: 'Using the Angular Router',
      link: 'router'
    },
    {
      title: 'Using NgRx',
      link: 'ngrx'
    },
  ];
}
