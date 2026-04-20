import { Component } from '@angular/core';
import { DashboardGraph } from "../../components/dashboard-graph/dashboard-graph";
import { DashboardClock } from "../../components/dashboard-clock/dashboard-clock";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardGraph, DashboardClock],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
