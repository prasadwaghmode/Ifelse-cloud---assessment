import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  cardsData : any;
  constructor( public apiService : ApiServiceService){}

  ngOnInit(){
    this.apiService.getData().subscribe(data => {
      this.cardsData = data;
      console.log("data ::>>",data);
      // Handle the API response here
    });
  }
}
