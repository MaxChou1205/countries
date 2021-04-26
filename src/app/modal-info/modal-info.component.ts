import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],
})
export class ModalInfoComponent implements OnInit {
  loading: boolean = true;
  info: any;

  constructor(
    private countryService: CountryService,
    public dialogRef: MatDialogRef<ModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.loading = true;
    this.countryService.getCountry(this.data).subscribe((result: any) => {
      this.info = result;
      this.loading = false;
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
