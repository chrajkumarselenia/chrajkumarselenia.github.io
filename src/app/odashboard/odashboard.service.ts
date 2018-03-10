import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class OdashboardService {

  constructor(private httpClient:HttpClient) { }

  GetCount(){
    //return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/locations/getcountlist');
    return this.httpClient.get('http://localhost:65005/api/Location/BatteryStatus/127');
  }
}
