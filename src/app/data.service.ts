import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor( public http:Http ) { 
    //
  }

  getPlaces() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map( res => res.json() );
  }

  addPlace(obj) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', obj)
      .map( res => res.json() );
  }
  
  removePlace(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id)
      .map( res => res.json() );
  }

}
