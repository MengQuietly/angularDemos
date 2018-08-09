import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimsComponent} from './anims/anims.component';
import {HomeComponent} from './home/home.component';


const routeConfig: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' }, // 重定向路由,添加默认路由
  { path: 'home', component: HomeComponent },
  { path: 'anims', component: AnimsComponent },
  { path: '**', redirectTo: 'home'}, // Not found
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  declarations: [],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
