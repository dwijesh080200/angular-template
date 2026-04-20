import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-graph',
  imports: [BaseChartDirective, MatCardModule],
  templateUrl: './dashboard-graph.html',
  styleUrl: './dashboard-graph.css',
  host: { style: 'display: block; min-height: 300px; width: 100%;' }
})

export class DashboardGraph {
public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to fill the container height
  };

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { 
        data: [65, 59, 80, 81, 56, 55, 40], 
        label: 'Weekly Activity',
        backgroundColor: '#8ab4f8' 
      }
    ]
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie'> = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['#8ab4f8', '#f8ad9d', '#ffd166'], // Blue, Soft Red, Yellow
      hoverOffset: 4
    }]
  };

}
