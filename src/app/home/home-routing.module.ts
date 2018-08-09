import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimsComponent} from '../anims/anims.component';
import {HomeComponent} from './home.component';


const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anims', component: AnimsComponent },
];

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(routeConfig)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule { }
