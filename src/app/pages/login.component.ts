import { Component } from '@angular/core';
import { PagesService } from './pages.service';
import{Router, ActivatedRoute} from '@angular/router';
import {SessionStorageServicesService} from '../services/session-storage-services.service';
import { error } from 'util';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
 LogData:any;
 token:any;
  constructor(private service:PagesService,private router:Router,private AativatedRoute:ActivatedRoute,private sessionstore:SessionStorageServicesService) { }
//     let tkn=sessionStorage.getItem('a_Token');
//     alert(tkn);
// if(tkn==null){
//   this.router.navigate(['/']);
// }


  //}
  LoginBen(DocumentId,Phone){
     this.service.Loginb(DocumentId,Phone).subscribe((data)=>{
       alert('success');
       sessionStorage.setItem('o_Token','f189d80eea148b9c10bd80ba6eea572709f62b48eed8aad359d9f72baf408052');
       sessionStorage.setItem('ownerID','3');
      // this.sessionstore.StoreOperatorData(this.LogData);
       debugger;
       
       if(sessionStorage.getItem('o_Token')!=null)
       {
         this.token=sessionStorage.getItem('o_Token');
         this.router.navigate(['/odashboard']);
       }
     },(error)=>{
       alert('failed');
     })
  };

  Login(Email,Password){
this.service.Login(Email,Password).subscribe((data)=>{
  if(data!=null)
  this.LogData=data;
  
  if(this.LogData.SingleData!=null){
    //this.sessionstore.StoreAdminData(this.LogData);
  if(this.LogData.SingleData.OwnerUserId==1){
    console.log(this.LogData.SingleData.Token);
    sessionStorage.setItem('a_Token',this.LogData.SingleData.Token);
    sessionStorage.setItem('ownerID',this.LogData.SingleData.OwnerUserId);
    console.log('atoke:'+this.LogData.SingleData.OwnerUserId);
  if(sessionStorage.getItem('a_Token')!=null){
    this.token=sessionStorage.getItem('a_Token');
    this.router.navigate(['/adashboard']);
  }
}
if(this.LogData.SingleData.OwnerUserId==2){
  //this.sessionstore.StoreSuperAdminData(this.LogData);
  console.log(this.LogData.SingleData.Token);
  sessionStorage.setItem('s_Token',this.LogData.SingleData.Token);
  sessionStorage.setItem('ownerID',this.LogData.SingleData.OwnerUserId);
  console.log('stoke:'+this.LogData.SingleData.OwnerUserId);
  debugger;
  
  if(sessionStorage.getItem('s_Token')!=null)
  {
    this.token=sessionStorage.getItem('s_Token');
    this.router.navigate(['/dashboard']);
  }
}
if(this.LogData.SingleData.OwnerUserId==3){
  sessionStorage.setItem('o_Token',this.LogData.SingleData.Token);
  sessionStorage.setItem('ownerID',this.LogData.SingleData.OwnerUserId);
 // this.sessionstore.StoreOperatorData(this.LogData);
  debugger;
  
  if(sessionStorage.getItem('o_Token')!=null)
  {
    this.token=sessionStorage.getItem('o_Token');
    this.router.navigate(['/odashboard']);
  }
}

}else{
  alert(this.LogData.Error.Text);
}

},
(error)=>{
  alert("failed");
  console.log(error);
}
);

}





// logout(): void {
//   // clear token remove user from local storage to log user out
//   this.LogData.SingleData.OwnerUserId = null;
//   localStorage.removeItem('a_Token');
//   this.router.navigate(['/pages/login']);
// }

}





























// import { Component } from '@angular/core';
// import { PagesService } from './pages.service';
// import{Router, ActivatedRoute} from '@angular/router';

// @Component({
//   templateUrl: 'login.component.html'
// })
// export class LoginComponent {
//   LogData:any;
//    constructor(private service:PagesService,private router:Router,private AativatedRoute:ActivatedRoute) { }
//    Login(Email,Password){
//  this.service.Login(Email,Password).subscribe((data)=>{
//    if(data!=null)
//    this.LogData=data;
//    if(this.LogData.SingleData!=null){
//    alert('success');
//    sessionStorage.setItem('Token',this.LogData.SingleData.Token);
//    var Token=sessionStorage.getItem('Token');
//    //alert(Token);
//    alert(this.LogData.SingleData.OwnerUserId);
 
//    if(this.LogData.SingleData.OwnerUserId==1){
//      alert(this.LogData.SingleData.UserTypeId);
//    this.router.navigate(['/adashboard']);
//  }
//   else if(this.LogData.SingleData.OwnerUserId==2){
//     this.router.navigate(['/dashboard']);
//   }
//   else if(this.LogData.SingleData.OwnerUserId==3){
//     this.router.navigate(['/odashboard']);
//   }
 
// }else{
//   alert(this.LogData.Error.Text);
// }

// },
// (error)=>{
//   alert("failed");
//   console.log(error);
// }
// );

// }
// }
