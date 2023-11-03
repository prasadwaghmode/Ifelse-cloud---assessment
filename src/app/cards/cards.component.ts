import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  title = 'IfElseProject';
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
