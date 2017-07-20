import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  states = [{code: 'AL', name: 'Alabama'}, {code: 'TX', name: 'Texas'}, {code: 'SF', name: 'San francisco'}];
}
