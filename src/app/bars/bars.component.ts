import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  private static rows:number = 20;
  private static columns:number = BarsComponent.rows * 2;
  public barRows: Array< Boolean > = [];
  public barColumns: Array< Boolean > = [];

  constructor() {

    console.log("In");
    this.barColumns = Array.from({ length: BarsComponent.columns }, () => false );
    this.barRows    = Array.from({ length: BarsComponent.columns }, () => false );
  }

  ngOnInit(): void {
  }


  isBarHere( x:number, y: number ): boolean {

    let middleColumn = BarsComponent.columns + 1;
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

  public static getBottomBarsCount(): number {
    return this.rows;
  }

  public static getRowCount(): number {
    return BarsComponent.rows;
  }

  barWidth() {
    return 100 / ( BarsComponent.rows * 2 );
  }
}
