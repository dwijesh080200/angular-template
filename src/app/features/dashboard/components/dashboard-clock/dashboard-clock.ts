import { Component } from '@angular/core';
import { interval, map, Observable, shareReplay, startWith, Subscription } from 'rxjs';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-clock',
  imports: [DatePipe, CommonModule],
  templateUrl: './dashboard-clock.html',
  styleUrl: './dashboard-clock.css',
})
export class DashboardClock {
  currentTime: Date = new Date();

  public time$: Observable<Date> = interval(1000).pipe(
    startWith(0), // Emit immediately on load
    map(() => new Date()),
    shareReplay(1) // Ensures multiple parts of the UI get the same time
  );

}
