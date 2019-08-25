import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import {SharedModule} from '../../shared.module';


@NgModule({
  imports: [
    CommonModule,SharedModule
  ],
  declarations:[HomePageComponent]

})
export class HomePageModule { }
