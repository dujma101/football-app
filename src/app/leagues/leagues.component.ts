import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service'
@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styles: []
})
export class LeaguesComponent {
  fixtures;

  constructor(dataService: GetDataService) {

    dataService.getData()
    response => this.fixtures = response
    console.log(this.fixtures);

  }
} 



