
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-ring',
  standalone: true,
  imports: [],
  templateUrl: './progress-ring.html',
  styleUrl: './progress-ring.css'
})
export class ProgressRing {

  progress = input(0);

}