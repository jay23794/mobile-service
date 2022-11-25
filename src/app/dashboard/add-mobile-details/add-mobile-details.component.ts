import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mobile-details',
  templateUrl: './add-mobile-details.component.html',
  styleUrls: ['./add-mobile-details.component.scss']
})
export class AddMobileDetailsComponent implements OnInit {
  mobileDetailsForm:any
  constructor() { }
  photo_url_1:any
  photo_url_2:any
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
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        if(imageType==="url_1"){
          this.photo_url_1 = event?.target?.result;
        }else{
          this.photo_url_2 = event?.target?.result;
        }

  }
}
}
