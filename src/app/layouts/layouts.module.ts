import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { SideNavService } from './side-nav.service';
import { LayoutsComponent } from './layouts.component';
@NgModule({
  declarations: [
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent,
  ],
  providers:[
    SideNavService,
  ]
})
export class LayoutsModule { }
