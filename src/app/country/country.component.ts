import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CountryService } from '../country.service';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'flag',
    'name',
    'alpha2Code',
    'alpha3Code',
    'nativeName',
    'altSpellings',
    'callingCodes',
  ];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private countryService: CountryService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.name.toLowerCase().indexOf(filter) > -1;
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.countryService.getCountries().subscribe((data: Country[]) => {
      this.dataSource.data = data;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(value): void {
    console.log(value);
    this.dialog.open(ModalInfoComponent, {
      width: '250px',
      data: value,
    });
  }
}

interface Country {
  flag: string;
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  nativeName: string;
  altSpellings: string[];
  callingCodes: string;
}
