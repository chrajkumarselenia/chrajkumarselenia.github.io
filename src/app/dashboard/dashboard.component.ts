import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'app/dashboard/dashboard.service';
import { forEach } from '@angular/router/src/utils/collection';
import {TranslateService} from '@ngx-translate/core';
import { FullLayoutComponent } from 'app/layouts/full-layout.component';

@Component({

  templateUrl: './dashboard.component.html',

})
export class DashboardComponent {
  title = 'app';
   //data:any[];
   ActiveAlerts:any;
   PendingAlerts:any;
   ResolvedAlerts:any;
   ActiveCount:number=0;
   ResolvedCount:number=0;
   PendingCount:number=0;

   Mera:any;
   public pieChartLabels: string[] = ['00-10%', '10-35%', '35-100%'];
   public pieChartData: number[] = [200, 500, 100];
   public  pieChartColor:any = [{ backgroundColor: ["#f86c6b ", "#ffc107 ", "#4dbd74 "]},{HoverColor:["#f86c6b ", "#ffc107 ", "#4dbd74 "] }];
    
   public pieChartType = 'pie';
    constructor(private service:DashboardService, private translate: TranslateService) {
        translate.setDefaultLang('en');
        this.service.GetCount().subscribe((data)=>{
            alert('success');
            console.log(data);
            alert(data);
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
            useLanguage(language: string) {
                this.translate.use(language);
              }
                ngOnInit(): void {}
              
              
        }