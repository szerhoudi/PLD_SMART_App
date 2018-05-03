import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Rest {
	
	public apiUrl = "https://s3.eu-west-3.amazonaws.com/pld-smart/event.json";
	public apiUrlEvent = "https://s3.eu-west-3.amazonaws.com/pld-smart/rif.json";

	constructor(public http: Http) {
		
	}

	fetchData() {
	    return new Promise(resolve => {
	      this.http.get(this.apiUrl).subscribe(data => {
	        resolve(data.json());
	      }, err => {
	        console.log(err);
	      });
	    });
	}

	fetchEvent() {
	    return new Promise(resolve => {
	      this.http.get(this.apiUrlEvent).subscribe(data => {
	        resolve(data.json());
	      }, err => {
	        console.log(err);
	      });
	    });
	}

}