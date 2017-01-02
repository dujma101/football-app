import { Injectable } from '@angular/core';
  import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetDataService {
  data;
  
  constructor(private http: Http) { }
  getData() {

    let opt: RequestOptions
    let myHeaders: Headers = new Headers
    myHeaders.append('X-Auth-Token', 'c288c640947b4ea4a64117615ecc08b2');
    opt = new RequestOptions({
      headers: myHeaders
    })
    return this.http.get('http://api.football-data.org/v1/fixtures/', opt)
      .map(res => res.json())
   
      }

  }





  