import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-list-demo',
  templateUrl: './checkbox-list-demo.component.html',
  styleUrls: ['./checkbox-list-demo.component.css']
})
export class CheckboxListDemoComponent implements OnInit {
  private checkboxData: CheckBoxList = {
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
  private checkboxes: any = this.checkboxData;

  constructor() { }

  ngOnInit() {
  }

  get checkBoxListValues() {
    return JSON.stringify(this.checkboxData, null, 2);
  }

  set checkBoxListValues(v) {
    try {
      this.checkboxes = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }

  }

}
