import { Component, Input } from '@angular/core';
import { QuoteCard } from '../quote-card/quote-card';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [QuoteCard],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {

  @Input() greeting = 'Assalamu Alaikum';

  @Input() name = '';

  @Input() date = '';

  @Input() hijriDate = '';

  @Input() verse = '';

  @Input() reference = '';

}