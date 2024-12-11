import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map!: L.Map;
  private centroid: L.LatLngLiteral = { lat: 1.3521, lng: 103.8198 };
  private shipMarkers: L.Marker[] = [];

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.generateShipMarkers();
  }

  private generateShipMarkers(): void {
    for (let i = 0; i < 5; i++) {
      const randomLat = this.centroid.lat + (Math.random() - 0.5) / 10;
      const randomLng = this.centroid.lng + (Math.random() - 0.5) / 10;
      const marker = L.marker([randomLat, randomLng]).addTo(this.map);
      this.shipMarkers.push(marker);
    }
  }

  private updateShipPositions(): void {
    this.shipMarkers.forEach((marker) => {
      const currentPos = marker.getLatLng();
      const newLat = currentPos.lat + (Math.random() - 0.5) / 100;
      const newLng = currentPos.lng + (Math.random() - 0.5) / 100;
      marker.setLatLng([newLat, newLng]);
    });
  }

  ngOnInit(): void {
    this.initMap();

    setInterval(() => {
      this.updateShipPositions();
    }, 2000);
  }
}
