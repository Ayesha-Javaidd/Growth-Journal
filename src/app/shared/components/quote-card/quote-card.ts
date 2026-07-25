import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [],
  templateUrl: './quote-card.html',
  styleUrl: './quote-card.css',
})
export class QuoteCard {

  @Input() verse = '';

  @Input() reference = '';

}