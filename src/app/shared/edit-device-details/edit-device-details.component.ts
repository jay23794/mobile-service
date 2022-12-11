import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceFormData } from 'src/app/dashboard/model/device-data.interface';
import * as uuid from 'uuid';
@Component({
  selector: 'app-edit-device-details',
  templateUrl: './edit-device-details.component.html',
  styleUrls: ['./edit-device-details.component.scss']
})
export class EditDeviceDetailsComponent implements OnInit {
  mobileDetailsForm: any;
  webcamImage: any = null;
  areImageChoosen = true;
  formData:DeviceFormData[] =[]
  deviceList: any[] = [];
  @Input()deviceDetails!: DeviceFormData;
  @Output() viewCustomerDetails=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.deviceDetails.device_photo_1);

    this.mobileDetailsForm = new FormGroup({
      customer_name: new FormControl(this.deviceDetails.name, [Validators.required]),
      mobile_no: new FormControl(this.deviceDetails.mobile_no, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      aleternate_mobile: new FormControl(this.deviceDetails.aleternate_mobile, [Validators.maxLength(10)]),
      company_name: new FormControl(this.deviceDetails.company_name, [Validators.required]),
      model_no: new FormControl(this.deviceDetails.model_no, [Validators.required]),
      device_photo_1: new FormControl("", [Validators.required]),
      additional_details: new FormControl(this.deviceDetails.additional_details, []),
      imei: new FormControl(this.deviceDetails.imei, [Validators.maxLength(15)]),
      price: new FormControl(this.deviceDetails.price, [Validators.required]),
      received_date: new FormControl(this.deviceDetails.received_date, [Validators.required]),
    });
    if(this.deviceDetails.device_list.length>0){
      this.areImageChoosen = false;
    }
  }
  get deviceFormControl() {
    return this.mobileDetailsForm.controls;
  }
  onSubmit(){
    if (this.mobileDetailsForm.valid) {
      //console.log('FORM SUBMITED',this.deviceList);
      this.formData.push({
        name:this.mobileDetailsForm.value.customer_name,
        additional_details:this.mobileDetailsForm.value.additional_details,
        aleternate_mobile:this.mobileDetailsForm.value.aleternate_mobile,
        company_name:this.mobileDetailsForm.value.company_name,
        device_list:this.deviceList,
        device_photo_1:this.mobileDetailsForm.value.device_photo_1,
        imei:this.mobileDetailsForm.value.imei,
        mobile_no:this.mobileDetailsForm.value.mobile_no,
        model_no:this.mobileDetailsForm.value.model_no,
        price:this.mobileDetailsForm?.value?.price,
        received_date:this.mobileDetailsForm?.value?.received_date,
      })
       console.log('FORM SUBMITED', this.formData);
       //localStorage.setItem("deviceDetails", JSON.stringify(this.formData));
     }
  }
  onRemoveFile() {
    this.deviceDetails.device_list.shift();
    if (this.deviceDetails.device_list.length==0) {
      this.mobileDetailsForm.get('device_photo_1').setValue("");
      this.areImageChoosen = true;
    }
  }
  onSelectFile(event: any, imageType: string) {
    if (event.target.files['length'] <= 2 && this.deviceList.length < 2) {
      for (let index = 0; index < event.target.files['length']; index++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[index]);
        reader.onload = (event) => {
          this.deviceList.push(event?.target?.result);
        };
      }
      this.areImageChoosen = false;
    } else {
      console.log('CANNOT CHOOSE MORE THAN 2');
    }
  }
  showCustomerDetails(){
    this.viewCustomerDetails.emit()
  }
}
