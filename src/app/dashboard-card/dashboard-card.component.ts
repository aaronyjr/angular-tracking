import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
  standalone: true
})
export class DashboardCardComponent {
  @Input() title!: string;
  @Input() content!: string;
}
