import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routeConfig: Routes = [
  // { path: '', component: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  declarations: [],
  exports: [RouterModule],
  providers: [],
})
export class AnimsRoutingModule { }
