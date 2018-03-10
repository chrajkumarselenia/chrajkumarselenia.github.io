import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable()
export class PagesService {

  constructor(private httpClient:HttpClient) { }
url:string;
  Login(Email,Password){
    return this.httpClient.post('http://52.52.49.131/dev_api/users/login',{EMAIL:Email,PASSWORD:Password});
  }
  Loginb(DocumentId,Phone){
     //this.url='http://52.52.49.131/api/Location/BatteryStatus/+PersonId';
    //return this.httpClient.post('http://52.52.49.131/api/Locations/Login',{DocumentId:DocumentId,Phone:Phone});
    return this.httpClient.post('http://localhost:65005/api/Locations/Login',{DocumentId:DocumentId,Phone:Phone});
  }
}
