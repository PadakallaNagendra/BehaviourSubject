import { Component, OnInit } from '@angular/core';
import { DataShreingService } from '../data-shreing.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

  Component2Data: any = '';


  constructor(private DataSharing: DataShreingService) {
    debugger;
    this.DataSharing.SharingData.subscribe((res: any) => {
      this.Component2Data = res;
    })
  }

  onSubmit(data:any) {
    debugger;
    this.DataSharing.SharingData.next(data.value);
  }

}
