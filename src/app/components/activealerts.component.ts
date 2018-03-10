import { Component,OnInit } from '@angular/core';
//import { PagesService } from './pages.service';
import { PagesService } from '../pages/pages.service';
import{Router, ActivatedRoute} from '@angular/router';
import { ComponentsService } from './components.service';
import { error } from 'util';
//import { PagerService } from '../components/PagerService';

@Component({
  templateUrl: 'activealerts.component.html'
})



// export interface ActiveAlerts {
//   ID: string;
//   Description: string;
//   Location: string;
//   Created: Date;
//   Imei:string;
//   Type:string;
// }

export class ActivealertsComponent {

  //p: number = 1;
ActiveAlerts : any;

Result:any;
private page :number=1;
private Pages:any;
private tootlepage:number=1; 

// // pager object
// pager: any = {};
 
// // paged items
// pagedItems: any[];


// totalRec : number;
// page: number = 1;

  constructor(private service:ComponentsService,private router:Router,private AativatedRoute:ActivatedRoute) { 
  

  //   this.service.GetTickets().subscribe((data)=>{
  //  console.log(data);
  //  this.ActiveAlerts=data;
  //  //console.log(this.ActiveAlerts.ListData);
  // //  console.log(data.)
  // //  this.totalRec = this.ActiveAlerts.ListData.length;
  // //  console.log(this.totalRec);
  // //  this.setPage(1);
  // }),error=>{
  //   console.log(error);
  // }
}


ngOnInit() {

  this.service.GetTickets(this.page).subscribe((data)=>{
    //console.log(data);TotalPages
    this.ActiveAlerts=data;
    console.log(this.ActiveAlerts);
   
   this.Result=this.ActiveAlerts.Pagination.TotalPages;
   alert(this.Result);
   
   }),error=>{
     console.log(error);
   }

 
}

getNext()
{
 
  debugger;
  this.tootlepage=this.tootlepage+1;
  for(this.tootlepage;this.tootlepage<=this.Result;this.tootlepage++)
  {
    this.service.GetTickets(this.tootlepage).subscribe((data)=>{
      //console.log(data);TotalPages
      this.ActiveAlerts=data;
      console.log(this.ActiveAlerts);
     
     //this.Result=this.ActiveAlerts.Pagination.TotalPages;
  
     });
     break;
    
     }

  }

  getPrevious()
  {
    alert(this.tootlepage);
    this.tootlepage=this.tootlepage-1;
  for(this.tootlepage;this.tootlepage<=this.Result;this.tootlepage--)
  {
    this.service.GetTickets(this.tootlepage).subscribe((data)=>{
      //console.log(data);TotalPages
      this.ActiveAlerts=data;
      console.log(this.ActiveAlerts);
     
     //this.Result=this.ActiveAlerts.Pagination.TotalPages;
 
     });
     break;
    
     }

  }



  getStart()
  {
    this.tootlepage=1;
    this.service.GetTickets(this.tootlepage).subscribe((data)=>{
      //console.log(data);TotalPages
      this.ActiveAlerts=data;
      console.log(this.ActiveAlerts);
     
     //this.Result=this.ActiveAlerts.Pagination.TotalPages;
   
     });

  }
 
  getEnd()
  {
    this.Result;
    this.service.GetTickets(this.Result).subscribe((data)=>{
      //console.log(data);TotalPages
      this.ActiveAlerts=data;
      console.log(this.ActiveAlerts);
     
     //this.Result=this.ActiveAlerts.Pagination.TotalPages;
    
     });
  }


// setPage(page: number) {
//           if (page < 1 || page > this.pager.totalPages) {
//               return;
//           }
//    
//           // get pager object from service
//           this.pager = this.pagerService.getPager(this.ActiveAlerts.length, page);
//    
//           // get current page of items
//           this.pagedItems = this.ActiveAlerts.slice(this.pager.startIndex, this.pager.endIndex + 1);
//       }

}