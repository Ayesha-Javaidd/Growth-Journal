import { Component, Input, input } from '@angular/core';
import { QuoteCard } from '../quote-card/quote-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [QuoteCard, CommonModule],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {

  readonly greeting = input('Assalamu Alaikum');

  @Input() name = '';

  readonly date = input('');

  readonly hijriDate = input('');

  readonly verse = input('');

  readonly reference = input('');

}