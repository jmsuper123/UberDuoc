import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var google: any;
import { Storage } from '@ionic/storage-angular';

export interface Viaje {
  id: number,
  hora: string,
  capacidad: number,
  destino: string,
  precio: number
}

@Component({
  selector: 'app-map-usuaios',
  templateUrl: './map-usuaios.page.html',
  styleUrls: ['./map-usuaios.page.scss'],
})
export class MapUsuaiosPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef | undefined;
  public map: any;
  public start: any = "Duoc UC: Sede Melipilla - Serrano, Melipilla, Chile";
  public latitude: any;
  public longitude: any;
  public directionsService: any;
  public directionsDisplay: any;
  public autocompleteItems: any;

  toAdd: Viaje = {
    id: 0,
    hora: "",
    precio: 0,
    capacidad: 0,
    destino: "Pomaire"
  }

  constructor(
    private zone: NgZone,
    private platform: Platform,
    private storage: Storage
  ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.initMap()
    })
  }

  initMap() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    let mapOptions = {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement!.nativeElement, mapOptions);
    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.toAdd.destino,
      travelMode: 'DRIVING'
    }, (response: any, status: string) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  updateSearchResults() {
    let GoogleAutocomplete = new google.maps.places.AutocompleteService();
    if (this.toAdd.destino == '') {
      this.autocompleteItems = [];
      return;
    }
    GoogleAutocomplete!.getPlacePredictions({ input: this.toAdd.destino },
      (predictions: any, status: any) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction: any) => {
            this.autocompleteItems!.push(prediction);
          });
        });
      });
  }

  selectSearchResult(item: any) {
    this.toAdd.destino = item.description
    this.autocompleteItems = []
    this.initMap()
  }
}

