import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-add-mobile-details',
  templateUrl: './add-mobile-details.component.html',
  styleUrls: ['./add-mobile-details.component.scss']
})
export class AddMobileDetailsComponent implements OnInit {
  mobileDetailsForm:any
   webcamImage: any = null;
   constructor() { }

  photo_url_1:any
  photo_url_2:any
  public showImage_1 = false;
  public showImage_2 = false;
  deviceList:any[]=[]
  webCam=false
  ngOnInit(): void {
    this.mobileDetailsForm=new FormGroup({
      customer_name :new FormControl('',  [Validators.required]),
      mobile_no:new FormControl('', [Validators.required,Validators.maxLength(10)]),
      aleternate_mobile:new FormControl('', [Validators.required]),
      company_name:new FormControl('', [Validators.required]),
      model_no:new FormControl('', [Validators.required]),
      device_photo_1:new FormControl('', [Validators.required]),
      device_photo_2:new FormControl('', [Validators.required]),
      iemi:new FormControl('', [Validators.required]),
      price:new FormControl('', [Validators.required]),
      received_date:new FormControl('', [Validators.required])
    })

  }
  onSubmit(){
    console.log(this.mobileDetailsForm);
    if(this.mobileDetailsForm.valid){
      console.log("FORM SUBMITED");

    }

  }
  get deviceFormControl(){
     return this.mobileDetailsForm.controls
  }
  onSelectFile(event:any,imageType:string){
    if(event.target.files['length']<=2){
      for (let index = 0; index < event.target.files['length']; index++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[index]);
        reader.onload = (event) => {
          this.deviceList.push(event?.target)
       }
    }
  }else{
    console.log("CANNOT CHOOSE MORE THAN 2");
 }
}

onRemoveFile(removedFile:string){
  if(removedFile==="showImage_1"){
    this.showImage_1=false
    this.photo_url_1=""
    this.mobileDetailsForm.value.device_photo_1=""
  }else{
    this.showImage_2=false
    this.photo_url_2=""
    this.mobileDetailsForm.value.device_photo_2=""
  }

 // console.log(this.mobileDetailsForm.value.device_photo_1.reset());
}


handleImage(webcamImage: WebcamImage) {
  console.log(webcamImage.imageAsDataUrl);
  this.webcamImage = webcamImage;
}
showWebCam(){
  this.webCam=!this.webCam
}
}
