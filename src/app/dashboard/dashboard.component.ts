import { Component,EventEmitter, Output } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cardsData : any;
  @Output() cardsDataOutput = new EventEmitter<any>();

  constructor( public apiService : ApiServiceService){}
  ngOnInit(){
    this.apiService.getData().subscribe(data => {
      if(data){
        this.cardsData = data;
        this.cardsDataOutput.emit(this.cardsData); // Emit the data
      }
    });
  }
}
