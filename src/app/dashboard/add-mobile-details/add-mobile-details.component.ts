import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { deviceDetails } from 'src/app/common/common-data-model';
import * as uuid from 'uuid';
import { DashboardService } from '../services/dashboard.service';
import { Observable, Subscription, take } from 'rxjs';
@Component({
  selector: 'app-add-mobile-details',
  templateUrl: './add-mobile-details.component.html',
  styleUrls: ['./add-mobile-details.component.scss'],
})
export class AddMobileDetailsComponent implements OnInit,OnDestroy {
  mobileDetailsForm!: FormGroup;
  webcamImage: any = null;
  areImageChoosen = true;
  formData!: deviceDetails;
  deviceList: any[] = [];
  webCam = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  addDevices$!:Observable<deviceDetails>
  subscription!:Subscription
  constructor(private _snackBar: MatSnackBar,private dashboardService:DashboardService ) {

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
      uuid:new FormControl(uuid.v4().split('-')[0])
    });
  }
  onSubmit() {
    if (this.mobileDetailsForm.valid) {
      console.log(this.deviceList,this.mobileDetailsForm.value);

      this.formData = this.mobileDetailsForm.value;
      this.formData.deviceList   = this.deviceList
      this.formData.email = "jayprmr27@gmail.com"

      this.addDevices$ = this.dashboardService.addDevice(this.formData)
       this.subscription =this.addDevices$.pipe(take(1)).subscribe((response)=>{
        this.resetForm()
       })

    }
  }
  get deviceFormControl() {
    return this.mobileDetailsForm.controls as any;
  }
  onSelectFile(event: any) {
    if (event.target.files['length'] <= 2 && this.deviceList.length < 2) {
      console.log("D");

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

  onRemoveFile(imageIndex: number) {
    this.deviceList.splice(imageIndex, 1);
    if (this.deviceList.length < 1) {
      this.mobileDetailsForm.value.device_photo_1 = '';
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
  resetForm(): void {
    this.mobileDetailsForm.reset();
    this.mobileDetailsForm.value.device_photo_1 = '';
    this.deviceList = [];
    this.openSnackBar();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }

  }
}
