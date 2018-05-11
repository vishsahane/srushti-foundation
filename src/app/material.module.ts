import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule,
    MatIconModule, MatListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule,
    MatIconModule, MatListModule],
})
export class MaterialModule { }
