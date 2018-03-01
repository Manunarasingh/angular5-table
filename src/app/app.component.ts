import { Component , OnInit} from '@angular/core';
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
  constructor(private dataService: DataService) {}
  columns: any[] = [
    {field: 'id', header: 'SL No'},
    {field: 'body', header: 'Content'},
    {field: 'title', header: 'Title'}
  ];
  data: TableData[];
  slFilter: number;
  timeout: any;
  selectedValue: TableData;
  content = 'Primng Table';
  ngOnInit() {
    this.dataService.getTableData().then((data) => {
        this.data = data;
    });
  }
  onPSliderChange(event, dt) {
    dt.filter(event.value, 'id', 'gt');
  }
}
