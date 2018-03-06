import { Component, OnInit } from '@angular/core';
import { DataService } from './service/service';

export interface TableData {
  id?;
  body?;
  title?;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) { }
  columns: any[] = [
    { field: 'id', header: 'SL No' },
    { field: 'body', header: 'Content' },
    { field: 'title', header: 'Title' }
  ];
  data: any[];
  content = 'Data Table';
  sortOrder = 1;
  ngOnInit() {
    this.dataService.getTableData().then((data) => {
      this.data = data;
    });
  }
  getSortOrder(column) {
    this.data.sort((a, b) => this.compareField(a, b, column) * this.sortOrder);
    if (this.sortOrder === 1) {
      this.sortOrder = -1;
    } else {
      this.sortOrder = 1;
    }
  }
  compareField(rowA: any, rowB: any, field: string) {
    const fieldB = false;
    if (rowA[field] == null) {
      return -1;
    }
    if (typeof rowA[field] === 'string') {
      return rowA[field].localeCompare(rowB[field]);
    }
    if (typeof rowA[field] === 'number') {
      if (rowA[field] > rowB[field]) {
        return -1;
      } else {
        return 1;
      }
    }
  }
}
