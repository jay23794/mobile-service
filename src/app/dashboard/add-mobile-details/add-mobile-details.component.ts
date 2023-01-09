import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { DeviceFormData } from '../model/device-data.interface';
import * as uuid from 'uuid';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-mobile-details',
  templateUrl: './add-mobile-details.component.html',
  styleUrls: ['./add-mobile-details.component.scss'],
})
export class AddMobileDetailsComponent implements OnInit {
  mobileDetailsForm: any;
  webcamImage: any = null;
  areImageChoosen = true;
  formData:DeviceFormData[] =[]
  deviceList: any[] = [];
  webCam = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar){

  }

  ngOnInit(): void {
    this.mobileDetailsForm = new FormGroup({
      customer_name: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      aleternate_mobile: new FormControl('', [Validators.maxLength(10)]),
      company_name: new FormControl('', [Validators.required]),
      model_no: new FormControl('', [Validators.required]),
      device_photo_1: new FormControl('', [Validators.required]),
      additional_details: new FormControl('', []),
      imei: new FormControl('', [Validators.maxLength(15)]),
      price: new FormControl('', [Validators.required]),
      received_date: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.mobileDetailsForm.valid) {
    const id= uuid.v4().split("-")[0]
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
        uuid:id
      })
     if(localStorage.getItem('deviceDetails')){
           const details = JSON.parse( localStorage.getItem('deviceDetails') || '{}')
           details.push(this.formData[0])
           localStorage.setItem("deviceDetails", JSON.stringify(details));
           this.mobileDetailsForm.reset();
           this.openSnackBar()


      }else{
        localStorage.setItem("deviceDetails", JSON.stringify(this.formData));
        this.mobileDetailsForm.reset();
        this.openSnackBar()


      }

     }
  }
    get deviceFormControl() {
      return this.mobileDetailsForm.controls;
    }
  onSelectFile(event: any) {
    if (event.target.files['length'] <= 2 && this.deviceList.length < 2) {
      for (let index = 0; index < event.target.files['length']; index++) {
        const reader = new FileReader();
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

  onRemoveFile(selectedFile: any, i: number) {
    this.deviceList.splice(0, 1);
    if (this.deviceList.length < 1) {
      this.mobileDetailsForm.get('device_photo_1').setValue("");
      this.areImageChoosen = true;
    }
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
  showWebCam() {
    this.webCam = !this.webCam;
  }

  openSnackBar() {
    this._snackBar.open('Device added successfully !', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

