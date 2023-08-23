import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Rosas Rojas', weight: 25, symbol: '5 dias'}
];


@Component({
  selector: 'app-data-table1',
  templateUrl: './data-table1.component.html',
  styleUrls: ['./data-table1.component.css']
})
export class DataTable1Component {
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  	dataSource = ELEMENT_DATA;
}
