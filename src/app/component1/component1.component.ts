import { Component, OnInit } from '@angular/core';
import { DataShreingService } from '../data-shreing.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component{

  component1Data: any = "";

  constructor(private DataShare: DataShreingService) {
    debugger;
    //subsribed in the constructor used to fetch the data
    this.DataShare.SharingData.subscribe((res: any) => {
      debugger;
      this.component1Data = res;
      
    });
  }

 //SharingData is sending data using next method.
 onSubmit(data:any){
  debugger;
  this.DataShare.SharingData.next(data.value);
}

}
