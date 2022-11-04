import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Table } from '../models/table';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getTableData(): Observable<Table[]> {
    return this.httpClient.get<Table[]>(`../../assets/mocks/tableData.json`);
  }
}
