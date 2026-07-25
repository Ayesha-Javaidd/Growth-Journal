
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css'
})
export class StatCard {

  title = input.required<string>();

  value = input.required<string>();

  subtitle = input('');

  icon = input('📊');

}