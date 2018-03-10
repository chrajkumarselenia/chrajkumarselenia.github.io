import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OdashboardService } from 'app/odashboard/odashboard.service';
import { forEach } from '@angular/router/src/utils/collection';
import {TranslateService} from '@ngx-translate/core';
import { FullLayoutComponent } from 'app/layouts/full-layout.component';

@Component({

  templateUrl: './Odashboard.component.html',

})
export class OdashboardComponent {
  title = 'app';
   //data:any[];
   ActiveAlerts:any;
   PendingAlerts:any;
   ResolvedAlerts:any;
   ActiveCount:number=0;
   ResolvedCount:number=0;
   PendingCount:number=0;
// barChart
public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
Mera:any;
public barChartLabels: string[] = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 AM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM'];
public barChartType = 'bar';
public barChartLegend = true;

public barChartData: any[] = [
  
  {data: [50, 48, 60, 75, 86, 72, 100,0,1,2,55,67,24,0,1,24,45,67,89,12,45,6,12], label: 'Battery percentage'}
];

 StatusList:any[]=new Array();
   public pieChartType = 'pie';
    constructor(private service:OdashboardService, private translate: TranslateService) {
        translate.setDefaultLang('en');
        this.service.GetCount().subscribe((data)=>{
            alert('success');
            console.log(data);
            alert(data);
            this.Mera=data;
            console.log(data);
            for(let i of this.Mera){
              alert(i.BatteryPercentage);
              this.StatusList.push(i.BatteryPercentage);
            }
            
            console.log(this.Mera.lowCount);
            this.barChartData = [
              //{data: [this.Mera.lowCount, this.Mera.mediumCount, 80, 81, 56, 55, 40], label: 'Battery percentage'}
              {data: this.StatusList, label: 'Battery percentage'}


            ];
        },
        (error)=>{
            console.log(error);
            alert('failed');
        });                       
          

              
               


                
                                   
                   
                 
                }
              }