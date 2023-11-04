import { Component , Input ,EventEmitter} from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  title = 'IfElseProject';
  cardsData : any;
  @Input()
  cardsDataInput!: EventEmitter<any>;

  constructor( public apiService : ApiServiceService){}

 

  ngOnInit(){
    this.cardsDataInput.subscribe(cardsData => {
      if(cardsData){
        this.cardsData = cardsData;
      }
    });
  }
}
