import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';

import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { DashboardGraph } from './components/dashboard-graph/dashboard-graph';
import { DashboardClock } from './components/dashboard-clock/dashboard-clock';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardGraph,
    DashboardClock,
    BaseChartDirective,
  ],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class DashboardModule {}
