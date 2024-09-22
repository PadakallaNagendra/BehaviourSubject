import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShreingService {

  SharingData =new BehaviorSubject<any>("hello");
  constructor() { }
}
