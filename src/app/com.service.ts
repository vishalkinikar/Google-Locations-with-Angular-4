import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ComService {

  public placeChanged: EventEmitter<any>;

  constructor() {
    this.placeChanged = new EventEmitter();
   }

  addNewPlace(place) {
  	this.placeChanged.emit(place);
   }

}
