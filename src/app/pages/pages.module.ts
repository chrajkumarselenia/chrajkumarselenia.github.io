import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import{FormsModule} from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesService } from './pages.service';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [ PagesRoutingModule,FormsModule,HttpClientModule,TabsModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    
  ],
  providers:[PagesService]

})
export class PagesModule { }
