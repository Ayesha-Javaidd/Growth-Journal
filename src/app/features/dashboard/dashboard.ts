import { Component } from '@angular/core';
import { PageContainer } from "../../shared/components/page-container/page-container";
import { PageHeader } from "../../shared/components/page-header/page-header";
import { Card } from "../../shared/components/card/card";
import { PrimaryButton } from "../../shared/components/primary-button/primary-button";
import { SectionTitle } from "../../shared/components/section-title/section-title";
import { EmptyState } from "../../shared/components/empty-state/empty-state";
import { ProgressRing } from "../../shared/components/progress-ring/progress-ring";
import { StatCard } from "../../shared/components/stat-card/stat-card";

@Component({
  selector: 'app-dashboard',
  imports: [PageContainer, PageHeader, Card, PrimaryButton, SectionTitle, EmptyState, ProgressRing, StatCard],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
