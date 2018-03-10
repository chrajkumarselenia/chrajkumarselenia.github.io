import { Injectable } from '@angular/core';

import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Injectable()
export class DashboardService {

  constructor(private httpClient:HttpClient) { }

  GetCount(){
    return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/FennixLocations/GetCentersCountList?centerID=4');
  }

  
  GetTicketsAlerts(){
    var Filtering="TicketStateId == 1";
    return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId',{Filtering:"TicketStateId == 1"},{
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem('s_Token')
      })
    });
  }


  GetTicketsByPending(){
  var Filtering="TicketStateId == 2";
   
    return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId',{Filtering:"TicketStateId == 2"},{
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem('s_Token')
      })
    });
  }



  GetTicketsByResolved(){
    return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId',{Filtering:"TicketStateId == 3"},{
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem('s_Token')
      })
    });
  }




}
