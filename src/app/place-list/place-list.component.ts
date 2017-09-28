import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html'
})
export class PlaceListComponent implements OnInit {
  places:place[];
  dummyObj:any = {
    title: 'foo',
    body: 'bar',
    userId: 2222
  }

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    
    this.dataservice.getPlaces().subscribe((places) => {
      console.log(places);
    })

    this.places = [
      {
        id : 1,
        name : 'Virar',
        state : 'Maharastra',
        country : 'India'
      },
      {
        id : 2,
        name : 'Vijapur',
        state : 'Karnataka',
        country : 'India'
      }
    ]
  }

  onRemovePlace(id) {
    this.dataservice.removePlace(id).subscribe();
  }

}

interface place {
  id : number,
  name : string,
  state : string,
  country : string
}
