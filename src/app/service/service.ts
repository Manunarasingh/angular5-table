import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  private webappsUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getTableData() {
    return this.http.get<any>(this.webappsUrl)
      .toPromise()
      .then((res) => res);
  }
}
