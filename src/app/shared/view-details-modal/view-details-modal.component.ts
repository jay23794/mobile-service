import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { deviceDetails } from 'src/app/common/common-data-model';


@Component({
  selector: 'app-view-details-modal',
  templateUrl: './view-details-modal.component.html',
  styleUrls: ['./view-details-modal.component.scss']
})
export class ViewDetailsModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public deviceDetails: deviceDetails,) { }
    toggleEditForm=true

    ngOnInit(): void {


  }
  showEditForm(){
    this.toggleEditForm =!this.toggleEditForm
  }


}
