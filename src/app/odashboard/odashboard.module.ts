import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { OdashboardComponent } from './odashboard.component';
import { OdashboardRoutingModule } from './odashboard-routing.module';
import { OdashboardService } from 'app/odashboard/odashboard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    OdashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpClientModule
  ],
  declarations: [ OdashboardComponent ],
  providers:[OdashboardService]
})
export class OdashboardModule { }
