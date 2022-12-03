import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-camera',
  templateUrl: './app-camera.component.html',
  styleUrls: ['./app-camera.component.scss']
})
export class AppCameraComponent implements OnInit {

  constructor() { }
  public deviceId="";
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  private trigger: Subject<void> = new Subject<void>();
  public errors: WebcamInitError[] = [];
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
     this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    console.log(error);

    this.errors.push(error);
  }
  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    console.log('active device: ' + directionOrDeviceId );

   this.nextWebcam.next(directionOrDeviceId);
  }
  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public handleImage(webcamImage: WebcamImage): void {
     console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
}
