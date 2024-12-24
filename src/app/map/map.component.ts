import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(public router: Router) {}
  private map!: L.Map;
  private centroid: L.LatLngLiteral = { lat: 1.3521, lng: 103.8198 };
  private shipMarkers: L.Marker[] = [];

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    this.generateShipMarkers();
  }

  private generateShipMarkers(): void {
    const defaultIcon = L.icon({
      iconUrl: 'ship-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    });

    for (let i = 0; i < 5; i++) {
      const randomLat = this.centroid.lat + (Math.random() - 0.5) / 10;
      const randomLng = this.centroid.lng + (Math.random() - 0.5) / 10;
      const marker = L.marker([randomLat, randomLng], { icon: defaultIcon });

      const shipName = `Ship ${i + 1}`;
      const status = i % 2 === 0 ? 'Docked' : 'En Route';
      marker.bindPopup(
        `
        <b>${shipName}</b><br>
        Status: ${status}
      `,
        { autoPan: false }
      );

      marker.bindTooltip(shipName);
      marker.addTo(this.map);
      this.shipMarkers.push(marker);
    }
  }

  private updateShipPositions(): void {
    this.shipMarkers.forEach((marker, index) => {
      const currentPos = marker.getLatLng();
      const newLat = currentPos.lat + (Math.random() - 0.5) / 100;
      const newLng = currentPos.lng + (Math.random() - 0.5) / 100;

      marker.setLatLng([newLat, newLng]);

      const status = index % 2 === 0 ? 'Docked' : 'En Route';
      marker.bindPopup(`
        <b>Ship ${index + 1}</b>
        <br>Status: ${status}<br>
        <img src="ship-popup.avif" alt="ship" style="width: 300px; height: auto;">
        <br>Location: [${newLat.toFixed(5)}, ${newLng.toFixed(5)}]
        <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-align: center; text-decoration: none; border-radius: 5px; cursor: pointer;">
  Vessel Details
</a>
      `);
    });
  }

  ngOnInit(): void {
    this.initMap();

    setInterval(() => {
      this.map.invalidateSize()  
    }, 0);

    setInterval(() => {
      this.updateShipPositions();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.map.remove();
  }
}
