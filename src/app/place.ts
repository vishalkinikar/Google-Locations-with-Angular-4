export class Place {
    id: number;
    address : string = '';
    country : string = '';
    latitude : number = 0;
    longitude : number = 0;
    name : string = '';
    state : string = '';
    location: any;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
