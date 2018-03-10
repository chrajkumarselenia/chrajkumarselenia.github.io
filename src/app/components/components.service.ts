import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class ComponentsService {

  constructor(private httpClient:HttpClient) { }
  GetTickets(tootlepage){
    let toke='';
  if(sessionStorage.getItem('a_Token')!=null){
    toke=sessionStorage.getItem('a_Token');
  }if(sessionStorage.getItem('s_Token')!=null){
    toke=sessionStorage.getItem('s_Token');
  }
    return this.httpClient.post('http://52.52.49.131/dev_api/Tickets/GetByCenterId',{Pagination:{"PageSize":10,"CurrentPage":tootlepage},"Sorting":"Id Asc","Filtering":"TicketStateId==1"},{
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+toke
      })
    });
  }



  PendingTicket(tootlepage){
    let toke='';
  if(sessionStorage.getItem('a_Token')!=null){
    toke=sessionStorage.getItem('a_Token');
  }if(sessionStorage.getItem('s_Token')!=null){
    toke=sessionStorage.getItem('s_Token');
  }
    return this.httpClient.post('http://52.52.49.131/dev_api/Tickets/GetByCenterId',{Pagination:{"PageSize":10,"CurrentPage":tootlepage},"Sorting":"Id Asc","Filtering":"TicketStateId==2"},{
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+toke
      })
    });
  }




ResolvedTicket(tootlepage){
let toke='';
  if(sessionStorage.getItem('a_Token')!=null){
    toke=sessionStorage.getItem('a_Token');
  }if(sessionStorage.getItem('s_Token')!=null){
    toke=sessionStorage.getItem('s_Token');
  }
    return this.httpClient.post('http://52.52.49.131/dev_api/Tickets/GetByCenterId',{Pagination:{"PageSize":10,"CurrentPage":tootlepage},"Sorting":"Id Asc","Filtering":"TicketStateId==3"},{

      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+toke
      })
    });
  }

  GetLowlist(){
    
    return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/locations/getlowlist/4');
  
}
MidList(){
    
  return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/FennixLocations/getMediumList/4');

}
NormalList(){
    
  return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/FennixLocations/getNormalList/4');

}
Test(){
  return this.httpClient.post('http://smsgateway.me/api/v3/messages/send',{
    number: ["8688009518","9492086930","9866556888","9885781035"],
    email: "ch.rajkumar@seleniatech.com",
    password: "Bhagya0424",
    device: "82544",
    message: "You battery status is low!"
  },{ headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })});
  
}
Test1(){
  return this.httpClient.get('http://smslogin.mobi/spanelv2/api.php?username=alivelu&password=ttd.1767&to=9866556888&from=srinivas&message=test');
  
}
}