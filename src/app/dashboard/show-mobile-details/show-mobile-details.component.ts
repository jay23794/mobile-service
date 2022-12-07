import { Component, OnInit } from '@angular/core';
import { DeviceFormData } from '../model/device-data.interface';

@Component({
  selector: 'app-show-mobile-details',
  templateUrl: './show-mobile-details.component.html',
  styleUrls: ['./show-mobile-details.component.scss']
})
export class ShowMobileDetailsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [];
  dataSource:DeviceFormData[] =[]
  extraColumns=['device_list','device_photo_1','additional_details','imei']
  notDataFound=true
  ngOnInit(): void {
    this.initDeviceDataForTable()

  }
  initDeviceDataForTable(){
    let data= JSON.parse(localStorage.getItem("deviceDetails")|| '{}')
    if(data.length>0){
      this.displayedColumns=Object.keys(data[0]);
      this.displayedColumns.push("View","Delete")
      this.displayedColumns = this.displayedColumns.filter((v:any) => !this.extraColumns.includes(v))
      this.dataSource=data
    }else{
      this.notDataFound=false
    }

  }
}
