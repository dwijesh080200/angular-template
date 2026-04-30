import { Component } from '@angular/core';
import { DashboardGraph } from '../../components/dashboard-graph/dashboard-graph';
import { DashboardClock } from '../../components/dashboard-clock/dashboard-clock';
import { Table } from "../../../../shared/table/table";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardGraph, DashboardClock, Table],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // Columns definition
tableTitle = 'Project Overview';

  tableCols = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Project Name' },
    { key: 'status', label: 'Status' },
  ];

  // Actual data
  projectData = [
    { id: 1, title: 'dwijesh System', status: 'Active' },
    { id: 2, title: 'home system', status: 'Pending' },
  ];

}
