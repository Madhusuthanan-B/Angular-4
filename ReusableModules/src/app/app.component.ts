import { Component } from '@angular/core';
import { UserService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private userSvc: UserService) {
    this.userSvc.getUsers().subscribe(data => {
      console.log(data);
    });
  }
}
