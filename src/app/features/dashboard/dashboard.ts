import { Component } from '@angular/core';

import { PageContainer } from '../../shared/components/page-container/page-container';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { FocusCard } from '../../shared/components/focus-card/focus-card';
import { PrayerTracker } from '../../shared/components/prayer-tracker/prayer-tracker';
import { ConsistencyHeatmap } from '../../shared/components/consistency-heatmap/consistency-heatmap';
import { JournalCard } from '../../shared/components/journal-card/journal-card';
import { Timeline } from '../../shared/components/timeline/timeline';
import { QuickActions } from '../../shared/components/quick-actions/quick-actions';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PageContainer,
    HeroBanner,
    FeatureCard,
    FocusCard,
    PrayerTracker,
    ConsistencyHeatmap,
    JournalCard,
    Timeline,
    QuickActions,
    SectionTitle
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {}