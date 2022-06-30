import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  buttons = [['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h'], ['i', 'j', 'k', 'l'], ['m', 'n', 'o', 'p'], ['q', 'r', 's', 't'], ['u', 'v', 'w', 'x'], ['y', 'z'], ['_', '.', '?', '!'], ['←', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]]
  section = 0;
  selectedCharIndex = undefined;
  time = 0;

  text = ''
}
