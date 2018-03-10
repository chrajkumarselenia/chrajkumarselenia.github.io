import { Component,OnInit } from '@angular/core';
//import { PagesService } from './pages.service';
import { PagesService } from '../pages/pages.service';
import{Router, ActivatedRoute} from '@angular/router';
import { ComponentsService } from './components.service';
import { error } from 'util';
//import { PagerService } from '../components/PagerService';

@Component({
  templateUrl: 'normallist.component.html'
})



// export interface ActiveAlerts {
//   ID: string;
//   Description: string;
//   Location: string;
//   Created: Date;
//   Imei:string;
//   Type:string;
// }

export class NormallistComponent {
    NormalList:any;
    constructor(private service:ComponentsService) {

        this.service.NormalList().subscribe((data)=>{
            
            alert('success');
            console.log(data);
          this.NormalList=data;
        },  
        (error)=>{
            console.log(error);
            alert('failed');
        });
    

}
}