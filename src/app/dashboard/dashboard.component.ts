import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule]
})
export class DashboardComponent {
  cards = [
    { title: 'Ship Status', content: 'Ship 1: Docked (Arriving in 2 hours)' },
    { title: 'Current Location', content: 'Singapore Port - Coordinates: 1.3521° N, 103.8198° E' },
    { title: 'ETA', content: 'Ship 2 ETA: 3 hours (Port A)' },
    { title: 'Cargo Info', content: 'Cargo: 500 tons of Electronics, 300 tons of Textiles' },
    { title: 'Fuel Consumption', content: 'Ship 1 Fuel: 60% remaining (expected range: 8 hours)' },
    { title: 'Active Ports', content: 'Port A: 4 ships (2 docked, 1 arriving in 1 hour), Port B: 2 ships (1 departing soon)' },
    { title: 'Dock Availability', content: 'Dock A: Available, Dock B: Full (next available at 3 PM)' },
    { title: 'Customs Inspection', content: 'Ship 3: Pending Inspection (Estimated time: 30 minutes)' },
    { title: 'Weather Conditions', content: 'Weather: Clear skies, Sea conditions: Calm' },
    { title: 'Maintenance Schedules', content: 'Dock A: Maintenance scheduled for tomorrow from 9 AM to 12 PM' }
  ];  
}