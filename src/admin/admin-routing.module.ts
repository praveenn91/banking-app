import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([{ path: '', component: AdminComponent }])],
  exports: [RouterModule],
  providers: [],
})
export class AdminRoutingModule {}
