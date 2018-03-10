import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

import { ActivealertsComponent } from 'app/components/activealerts.component';
import { PendingtasksComponent } from 'app/components/pendingtasks.component';
import { resolvedtasksComponent } from 'app/components/resolvedtasks.component';
import { ViewmapComponent } from 'app/components/viewmap.component';
import { AddnewinmateComponent } from 'app/components/addnewinmate.component';
import { LowlistComponent } from 'app/components/lowlist.component';
import { MidListComponent } from 'app/components/midlist.component';
import { NormallistComponent } from 'app/components/normallist.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'viewmap',
        component: ViewmapComponent,
        data: {
          title: 'Viewmap'
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'addnewinmate',
        component: AddnewinmateComponent,
        data: {
          title: 'Addnewinmate'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'activealerts',
        component: ActivealertsComponent,
        data: {
          title: 'Activealerts'
        }
      },
      {
        path: 'pendigtasks',
        component: PendingtasksComponent,
        data: {
          title: 'Pendingtasks'
        }
      },
      {
        path: 'resolvedtasks',
        component: resolvedtasksComponent,
        data: {
          title: 'Resolvedtasks'
        }
       
      },
      {
        path: 'lowlist',
        component: LowlistComponent,
        data: {
          title: 'Lowlist'
        }
       
      },
      {
        path: 'midlist',
        component: MidListComponent,
        data: {
          title: 'Midlist'
        },
       
      },
      {
        path: 'normallist',
        component: NormallistComponent,
        data: {
          title: 'Normallist'
        },
       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
