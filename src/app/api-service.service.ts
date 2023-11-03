import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiUrl = 'https://1.api.fy23ey05.careers.ifelsecloud.com/';

  constructor(private http: HttpClient) { }

  getData() {
    console.log("this.http.get(this.apiUrl) ::>>",this.http.get(this.apiUrl));
    
    return this.http.get(this.apiUrl);
  }
}
