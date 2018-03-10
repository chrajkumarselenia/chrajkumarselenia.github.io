import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AdashboardComponent } from './adashboard.component';
import { AdashboardRoutingModule } from './adashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdashboardService } from 'app/adashboard/adashboard.service';

@NgModule({
  imports: [
    AdashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpClientModule
  ],
  declarations: [ AdashboardComponent ],
  providers:[AdashboardService]
})
export class AdashboardModule { }
