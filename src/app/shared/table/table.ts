import { Component, Input } from '@angular/core';
import { TableColumn } from '../../core/models/model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [[CommonModule, MatTableModule]],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() width: string = '100%';
  @Input() height: string = 'auto';

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];

  ngOnInit() {
    this.dataSource.data = this.data;
    this.displayedColumns = this.columns.map(c => c.key);
  }
}
