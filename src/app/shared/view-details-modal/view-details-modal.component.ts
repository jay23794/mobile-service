import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeviceFormData } from 'src/app/dashboard/model/device-data.interface';

@Component({
  selector: 'app-view-details-modal',
  templateUrl: './view-details-modal.component.html',
  styleUrls: ['./view-details-modal.component.scss']
})
export class ViewDetailsModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public deviceDetails: DeviceFormData,) { }
    toggleEditForm=true

    ngOnInit(): void {


  }
  showEditForm(){
    this.toggleEditForm =!this.toggleEditForm
  }


}
