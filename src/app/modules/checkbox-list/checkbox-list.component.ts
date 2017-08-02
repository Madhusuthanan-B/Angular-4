import { Component, OnInit, Input } from '@angular/core';
import {} from './checkbox-list.component.d';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.css']
})
export class CheckboxListComponent implements OnInit {

  @Input() checkBoxList: CheckBoxList;
  enableCheckBoxList: boolean = false;

  constructor() { }

  ngOnInit() {
    if (!!this.checkBoxList) {
      this.enableCheckBoxList = true;
    }
  }

}
