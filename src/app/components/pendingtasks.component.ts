import { Component } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import { ComponentsService } from './components.service';

@Component({
  templateUrl: 'pendingtasks.component.html'
})
export class PendingtasksComponent {

Pendingtask:any;

private tootlepage:number=1; 
Result:any;
private page :number=1

  constructor(private service:ComponentsService,private router:Router,private AativatedRoute:ActivatedRoute) { 
   
  
    //   this.service.PendingTicket().subscribe((data)=>{
    //  console.log(data);
    //  this.Pendingtask=data;
   
    //  //console.log(this.ActiveAlerts.ListData);
    // //  console.log(data.)
    // //  this.totalRec = this.ActiveAlerts.ListData.length;
    // //  console.log(this.totalRec);
    // //  this.setPage(1);
    // }),error=>{
    //   console.log(error);
    // }
  }
  
  
  ngOnInit(): void {
  
    this.service.PendingTicket(this.page).subscribe((data)=>{
      console.log(data);
      this.Pendingtask=data;
    
      //console.log(this.ActiveAlerts.ListData);
     //  console.log(data.)
     //  this.totalRec = this.ActiveAlerts.ListData.length;
     //  console.log(this.totalRec);
     //  this.setPage(1);
     this.Result=this.Pendingtask.Pagination.TotalPages;
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
      this.service.PendingTicket(this.tootlepage).subscribe((data)=>{
        //console.log(data);TotalPages
        this.Pendingtask=data;
        console.log(this.Pendingtask);
       
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
      this.service.PendingTicket(this.tootlepage).subscribe((data)=>{
        //console.log(data);TotalPages
        this.Pendingtask=data;
        console.log(this.Pendingtask);
       
       //this.Result=this.ActiveAlerts.Pagination.TotalPages;
   
       });
       break;
      
       }
  
    }
  
  
  
    getStart()
    {
      this.tootlepage=1;
      this.service.PendingTicket(this.tootlepage).subscribe((data)=>{
        //console.log(data);TotalPages
        this.Pendingtask=data;
        console.log(this.Pendingtask);
       
       //this.Result=this.ActiveAlerts.Pagination.TotalPages;
     
       });
  
    }
   
    getEnd()
    {
      this.Result;
      this.service.PendingTicket(this.Result).subscribe((data)=>{
        //console.log(data);TotalPages
        this.Pendingtask=data;
        console.log(this.Pendingtask);
       
       //this.Result=this.ActiveAlerts.Pagination.TotalPages;
      
       });
    }
  



}