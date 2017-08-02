import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-list-demo',
  templateUrl: './checkbox-list-demo.component.html',
  styleUrls: ['./checkbox-list-demo.component.css']
})
export class CheckboxListDemoComponent implements OnInit {
  private checkboxes: CheckBoxList = {
    checkboxes: [
      { id: 'chkMobileNotification', name: 'Option1', value: 'Option 1', label: 'Enable Mobile Notifications' },
      {
        id: 'chkWebNotification', name: 'Option1', value: 'Enable Web Notifications',
        label: 'Enable Web Notifications', checked: true
      },
      {
        id: 'chkFbNotification', name: 'Option1', value: 'Enable Facebook Notification',
        label: 'Enable Facebook Notification', disabled: true
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
