import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  public barRows: Array< Boolean > = [];
  public rows:number = 10;
  public barColumns: Array< Boolean > = [];
  public columns:number = 20;

  constructor() {

    console.log("In");
    this.barColumns = Array.from({ length: 20 }, () => false );
    this.barRows    = Array.from({ length: 20 }, () => false );
  }

  ngOnInit(): void {
  }


  isBarHere( x:number, y: number ): boolean {

    let middleColumn = this.columns + 1;
    let count:number = y;
    let column:number = middleColumn - y;
    let ret:boolean = false;

    while ( column < count ) {

      if ( column === x ) {

        ret = true;
        break;
      }
      column += 2;
    }

    return ret;
  }
}
