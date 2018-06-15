import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private userIdSource = new BehaviorSubject<string>('');
  currentUser = this.userIdSource.asObservable();

  constructor() {   
  }
  
  setUser(userid: string) {
    this.userIdSource.next(userid);
  }

  getUser(userid: string) {
    this.userIdSource.next(userid);
  }


}
