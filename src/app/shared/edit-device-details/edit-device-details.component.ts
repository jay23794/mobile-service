
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { deviceDetails } from 'src/app/common/common-data-model';

@Component({
  selector: 'app-edit-device-details',
  templateUrl: './edit-device-details.component.html',
  styleUrls: ['./edit-device-details.component.scss']
})
export class EditDeviceDetailsComponent implements OnInit {
  mobileDetailsForm!: any;
  webcamImage: any = null;
  areImageChoosen = true;
  formData:deviceDetails[] =[]
  deviceList: any[] = [];
  @Input()deviceDetails!: deviceDetails;
  @Output() viewCustomerDetails=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.mobileDetailsForm = new FormGroup({
      customer_name: new FormControl(this.deviceDetails.name, [Validators.required]),
      mobile_no: new FormControl(this.deviceDetails.mobileNo, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      aleternate_mobile: new FormControl(this.deviceDetails.aleternateMobile, [Validators.maxLength(10)]),
      company_name: new FormControl(this.deviceDetails.companyName, [Validators.required]),
      model_no: new FormControl(this.deviceDetails.modelNo, [Validators.required]),
      device_photo_1: new FormControl("", [Validators.required]),
      additional_details: new FormControl(this.deviceDetails.additionalDetails, []),
      imei: new FormControl(this.deviceDetails.imei, [Validators.maxLength(15)]),
      price: new FormControl(this.deviceDetails.price, [Validators.required]),
      received_date: new FormControl(this.deviceDetails.receivedDate, [Validators.required]),
    });
    if(this.deviceDetails.deviceList.length>0){
      this.areImageChoosen = false;
    }

  }
  get deviceFormControl() {
    return this.mobileDetailsForm.controls;
  }
  onSubmit(){
    this.formData=[]
    if (this.mobileDetailsForm.valid) {
      this.formData.push({
        name:this.mobileDetailsForm.value.customer_name,
        additionalDetails:this.mobileDetailsForm.value.additional_details,
        aleternateMobile:this.mobileDetailsForm.value.aleternate_mobile,
        companyName:this.mobileDetailsForm.value.company_name,
        deviceList:this.deviceDetails.deviceList,
        device_photo_1:this.mobileDetailsForm.value.device_photo_1,
        imei:this.mobileDetailsForm.value.imei,
        mobileNo:this.mobileDetailsForm.value.mobile_no,
        modelNo:this.mobileDetailsForm.value.model_no,
        price:this.mobileDetailsForm?.value?.price,
        receivedDate:this.mobileDetailsForm?.value?.received_date,
        uuid:this.deviceDetails.uuid,
        email:"jayprmr27@gmail.com"
      })
       if(localStorage.getItem('deviceDetails')){
        this.updateLocalStorage()
       }else{
         localStorage.setItem("deviceDetails", JSON.stringify(this.formData));
       }
     }
  }
  updateLocalStorage() {
    let details:deviceDetails[]
    details = JSON.parse( localStorage.getItem('deviceDetails') || '{}')
    details.forEach((element:any,i) => {
     if(this.deviceDetails.uuid===element.uuid){
       details[i]=this.formData[0]
       localStorage.setItem("deviceDetails", JSON.stringify(details))
     }
   });
  }
  onRemoveFile() {
    this.deviceDetails.deviceList.shift();
    if (this.deviceDetails.deviceList.length==0) {
      this.mobileDetailsForm.get('device_photo_1').setValue("")  ;
      this.areImageChoosen = true;
    }
  }
  onSelectFile(event: any, imageType: string) {
    if (event.target.files['length'] <= 2 && this.deviceDetails.deviceList.length < 2) {
      for (let index = 0; index < event.target.files['length']; index++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[index]);
        reader.onload = (event) => {
            // TODO: need to check here device list
          this.deviceDetails.deviceList.push(event?.target?.result)
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
