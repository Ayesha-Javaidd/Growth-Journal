import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  padding = input<'sm' | 'md' | 'lg'>('md');

}