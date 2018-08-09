import { Component, OnInit } from '@angular/core';
import {RoutingModel} from '../routing-model';
import {HomeList} from './home-mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataList: RoutingModel[];
  constructor() { }

  ngOnInit() {
    this.dataList = HomeList ;
  }
}
