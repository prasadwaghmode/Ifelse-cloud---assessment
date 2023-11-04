import { Component , Input ,EventEmitter} from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tableData : any;
  @Input()
  tableDataInput!: EventEmitter<any>;

  constructor( public apiService : ApiServiceService){}

  ngOnInit(){
    this.tableDataInput.subscribe(data => {
      if(data){
        this.tableData = data;
      }
    });
  }
}
