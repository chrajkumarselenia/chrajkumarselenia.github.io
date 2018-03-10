import { NgModule } from '@angular/core';


import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';


// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { ActivealertsComponent } from 'app/components/activealerts.component';
import { PendingtasksComponent } from 'app/components/pendingtasks.component';
import { resolvedtasksComponent } from 'app/components/resolvedtasks.component';
import { ViewmapComponent } from 'app/components/viewmap.component';
import { AddnewinmateComponent } from 'app/components/addnewinmate.component';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { ComponentsService } from 'app/components/components.service';
import { LowlistComponent } from 'app/components/lowlist.component';
import { MidListComponent } from 'app/components/midlist.component';
import { NormallistComponent } from 'app/components/normallist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [
    ViewmapComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    AddnewinmateComponent,
    SwitchesComponent,
    TablesComponent,
    resolvedtasksComponent,
    ActivealertsComponent,
    PendingtasksComponent,
    LowlistComponent,
    MidListComponent,
    NormallistComponent
  ],
  providers:[ComponentsService]
})
export class ComponentsModule { }
