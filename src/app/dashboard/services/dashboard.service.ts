import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { deviceDetails } from 'src/app/common/common-data-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private http: HttpClient) { }

 addDevice(device:deviceDetails):Observable<deviceDetails> {
    return this.http.post<deviceDetails>(`${environment.apiUrl}/deviceDetails/add`,  device )
        .pipe(map(user => {
              return user;
        }));
      }

showDevice():Observable<deviceDetails[]> {
  return this.http.get<any>(`${environment.apiUrl}/device/show`,  )
      .pipe(map(device => {
            return device.devices ;
      }));
    }
}
