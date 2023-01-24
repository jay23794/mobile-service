import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { deviceDetails } from 'src/app/common/common-data-model';
import { ViewDetailsModalComponent } from 'src/app/shared/view-details-modal/view-details-modal.component';

import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-show-mobile-details',
  templateUrl: './show-mobile-details.component.html',
  styleUrls: ['./show-mobile-details.component.scss']
})
export class ShowMobileDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog,private dashboardService:DashboardService) { }
  displayedColumns: string[] = [];
  dataSource:deviceDetails[] =[]

  // Extra colums which will not goign to be part of summary table
  extraColumns=['_id','__v','imei','email','device_list','device_photo_1','timestamp','additional_details']
  // showing messsage if no data found
  isDevicesFound=true

  ngOnInit(): void {
    this.initDevicesForTable()

  }
  initDevicesForTable(){
    this.dashboardService.showDevice().subscribe((response)=>{
      if(response.length>0){
        this.displayedColumns.push("index",...Object.keys(response[0]),"View","Delete") ;
        this.displayedColumns = this.displayedColumns.filter((v:any) => !this.extraColumns.includes(v))
        this.dataSource=response
      }else{
        this.isDevicesFound=false
      }
    })


  }

  onViewDetails(deviceDetails:deviceDetails){
    this.dialog.open(ViewDetailsModalComponent, {
      data:deviceDetails,
      height: '400px',
       width: '600px',
    });
  }
  onDeleteCustomerdetails(uuid:string){
    this.dataSource=this.dataSource.filter((data)=>data.uuid!=uuid)
    localStorage.setItem('deviceDetails',JSON.stringify(this.dataSource))
  }
}
