import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service'
@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styles: []
})
export class LeaguesComponent {
  
  data;
  constructor(dataService: GetDataService) {

    dataService.getData()
      .subscribe((res) => {
        this.data = res;;
        console.log(this.data);

      })
   } 
}  



