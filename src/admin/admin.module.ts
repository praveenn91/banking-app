import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AdminComponent],
  imports: [BrowserModule, AdminRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
