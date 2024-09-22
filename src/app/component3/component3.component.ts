import { Component, OnInit } from '@angular/core';
import { DataShreingService } from '../data-shreing.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {
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
