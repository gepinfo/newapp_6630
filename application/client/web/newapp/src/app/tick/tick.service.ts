import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class TickService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAlltickValues(data:any){
    return this.http.post(`${this.BaseURL}/tick`,data);
  }

  GetAlltickValues(){
    return this.http.get(`${this.BaseURL}/tick`);
  }

  Updatetick(data:any){
    return this.http.put(`${this.BaseURL}/tick/${data.id}`,data);
  }

  getSpecifictick(id:number){
    return this.http.get(`${this.BaseURL}/tick/${id}`);
  }

  getSpecifictickHistory(id:number){
    return this.http.get(`${this.BaseURL}/tick/${id}/history?days=30`);
  }

  DeletetickValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/tick/${dataId}`);
  }

  GetEntityById(tickId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/tickid/` + tickId);
  }

  Searchtick(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/tick/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}