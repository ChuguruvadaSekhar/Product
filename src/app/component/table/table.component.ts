import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {Table} from '../../../app/models/table'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns!: string[];
  tableData!: any[];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }


  getData() {

    this.productService.getTableData().subscribe((data)=>{
      this.tableData = data;
      this.displayedColumns = Object.keys(this.tableData[0]).map(k => k)
    })
    
    
  }

  navigateTo(id: any){
    this.router.navigate(['detail/'+id]);
  }
}
