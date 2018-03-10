import { Component,OnInit } from '@angular/core';
//import { PagesService } from './pages.service';
import { PagesService } from '../pages/pages.service';
import{Router, ActivatedRoute} from '@angular/router';
import { ComponentsService } from './components.service';
import { error } from 'util';
import { forEach } from '@angular/router/src/utils/collection';
//import { PagerService } from '../components/PagerService';

@Component({
  templateUrl: 'lowlist.component.html'
})



// export interface ActiveAlerts {
//   ID: string;
//   Description: string;
//   Location: string;
//   Created: Date;
//   Imei:string;
//   Type:string;
// }

export class LowlistComponent {
GetLowList:any;
//SmsList:any[];
 
    constructor(private service:ComponentsService) {

        this.service.GetLowlist().subscribe((data)=>{
            
            alert('success');
            console.log(data);
          this.GetLowList=data;
        },  
        (error)=>{
            console.log(error);
            alert('failed');
        });
    

}
SmsList:any[] = new Array(); 
SMS(list){
 
    console.log(list);
    if(list.length>0)
    for(let i of list){
        if(i.isChecked){
            this.SmsList.push(i);
        }
       

    }
    this.service.Test().subscribe((data)=>{
        alert('success');
        console.log(data);
    },(error)=>{
        alert(error);
        console.log(error);
    });

    this.service.Test1().subscribe((data)=>{
        alert('success');
        console.log(data);
    },(error)=>{
        alert(error);
        console.log(error);
    });

}

}