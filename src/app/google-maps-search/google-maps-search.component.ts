import { Component, ViewChild, ElementRef, NgZone, EventEmitter, Output, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { DataService } from '../data.service';
import { ComService } from '../com.service';
import { Place } from '../place';

@Component({
  selector: 'app-google-maps-search',
  templateUrl: './google-maps-search.component.html'
})
export class GoogleMapsSearchComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;

  newPlace:any;
  
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private dataservice:DataService, private comservice:ComService) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if(place.geometry === undefined || place.geometry === null ){
              return;
            } 
            this.newPlace = place;
            // this.comservice.addNewPlace(place);
          });
        });
      }
    );
  }

  onAddPlace(place) {
    var newObj:any = new Place({
      address : place.formatted_address,
      country : '',
      latitude : place.geometry.location.lat(),
      longitude : place.geometry.location.lng(),
      name : '',
      state : '',
      location: place.geometry.location
    });

    if(!place.name) {
      newObj.name = place['address_components'][0]['long_name'];
    } else {
      newObj.name = place.name;
    }

    for(var key in place){
      if(key === 'address_components') {
        place['address_components'].forEach(function(v, i){
          if(v.types[0] === "administrative_area_level_1") {
            newObj.state = v["long_name"]
          }
          if(v.types[0] === "country") {
            newObj.country = v["long_name"]
          }
        });
      }
    }

    // console.log(place, newObj);
    this.comservice.addNewPlace(newObj);
  }

}
