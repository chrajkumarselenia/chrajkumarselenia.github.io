import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdashboardService } from 'app/adashboard/adashboard.service';
@Component({

  templateUrl: './adashboard.component.html',

})
export class AdashboardComponent {
  title = 'app';
  ActiveAlerts:any;
  PendingAlerts:any;
  ResolvedAlerts:any;
  ActiveCount:number=0;
  ResolvedCount:number=0;
  PendingCount:number=0;
   //data:any[];
   Mera:any;
   public pieChartLabels: string[] = ['00-10%', '10-35%', '35-100%'];
   public pieChartData: number[] = [200, 500, 100];
   public pieChartType = 'pie';
   public pie1ChartLabels: string[] = ['00-10%', '10-35%', '35-100%','NO Beneficiaries'];
   public pie1ChartData: number[] = [0, 0, 0,1];
   public pie1ChartType = 'pie';
    constructor(private service:AdashboardService) {

        this.service.GetCount().subscribe((data)=>{
            alert('success');
            console.log(data);
            this.Mera=data;
            console.log(this.Mera.lowCount);
            this.pieChartData=[this.Mera.lowCount, this.Mera.mediumCount, this.Mera.NormalCount];
        },
        (error)=>{
            console.log(error);
            alert('failed');
        });
    
    
        this.service.GetTicketsAlerts().subscribe((data)=>{
            console.log(data);
            this.ActiveAlerts=data;
            this.ActiveCount=this.ActiveAlerts.SingleData;
            console.log('ActiveAlerts'+this.ActiveAlerts.SingleData);   
           }),error=>{
             console.log(error);
           };


             
                                
                this.service.GetTicketsByPending().subscribe((data)=>{
                this.PendingAlerts=data;
                this.PendingCount=this.PendingAlerts.SingleData;
               console.log('PendingAlerts'+this.PendingAlerts.SingleData);   
               }),error=>{
                 console.log(error);
               };
 
              
                     this.service.GetTicketsByResolved().subscribe((data)=>{
                    this.ResolvedAlerts=data; 
                    this.ResolvedCount=this.ResolvedAlerts.SingleData;
                    console.log('ResolvedCount'+this.ResolvedAlerts.SingleData);                                       
                   }),error=>{
                     console.log(error);
                   }


         }
        //  useLanguage(language: string) {
        //      this.translate.use(language);
        //    }
        //      ngOnInit(): void {}
           
           
     }
   
    // onInit(){

    //     this.service.GetCount().subscribe((data)=>{
    //         alert('success');
    //         console.log(data);
    //     },
    //     (error)=>{
    //         console.log(error);
    //         alert('failed');
    //     });
       
    // } 
   
//}




