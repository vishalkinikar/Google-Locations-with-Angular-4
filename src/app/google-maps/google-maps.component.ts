import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

import { DataService } from '../data.service';
import { ComService } from '../com.service';
import { Place } from '../place';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html'
})
export class GoogleMapsComponent implements OnInit {

  locations:any = [];
  map: any;

  constructor(private comservice:ComService, public mapLoad:MapsAPILoader, private dataservice:DataService) {
    comservice.placeChanged.subscribe(places => this.onPlaceChanged(places));
   }

  
  ngOnInit() {}
  
  public onPlaceChanged(places){

    if(!this.isDuplicate(places)) {
      this.dataservice.addPlace(places).subscribe((places) => {
        console.log(places);
      })
  
      this.locations.push(places);
  
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < this.locations.length; i++) {
       bounds.extend(this.locations[i].location);
      }
      
      this.map.fitBounds(bounds);
    }

  }

  public markerClicked = (markerObj) => {
    console.log(markerObj);
  }

  public assignMap(map) {
    this.map = map;
  }

  public markerDragEnd(place, e){
    var latlng = new google.maps.LatLng(e.coords.lat, e.coords.lng);
    console.log('latlng',latlng.lat());
    var geocoder = geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                console.log("Location: ", results[0]);
            }
        }
    });
  }

  private isDuplicate(place){
    var isDup:boolean = false;
    this.locations.forEach(element => {
      if(element.name === place.name) {
        isDup = true;
      }
    });
    return isDup;
  }

}

