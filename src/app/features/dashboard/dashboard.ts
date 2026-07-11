import { Component } from '@angular/core';
import { PageContainer } from "../../shared/components/page-container/page-container";

@Component({
  selector: 'app-dashboard',
  imports: [PageContainer],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
