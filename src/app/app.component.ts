import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';


interface TableData{
  id: string;
  title: {
    romaji: string
  },
  description: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  tableData: TableData[] = [];

  constructor(private service: AppService){}

  ngOnInit(): void {
    this.service.getData()
    .subscribe((res:any)=>{
      this.tableData = res.data.Page.media;
    })
  }
  
}
