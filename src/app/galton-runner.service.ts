import { EventEmitter, Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';
import { BarsComponent } from "./bars/bars.component";

@Injectable({
  providedIn: 'root'
})
export class GaltonRunnerService {

  private subject = new Subject< number >();

  constructor() { }

  getCount() {
    return 100;
  }

  sendMessage( n: number ) {
    this.subject.next( n );
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable< number > {
    return this.subject.asObservable();
  }

  startBucket( bucket: any ): void {

      let balls:number = bucket.bucketLevel;
      let ball: number = 0; 

      for ( ball = 0; ball < balls; ball++ ) {

        let index:number = 0;
        let bar: number = 0; 

        for ( bar = 1; bar < BarsComponent.getBottomBarsCount(); bar ++ ) {

          if ( this.randomGreaterThanZero() ) {
            index++;
          }
        }

        bucket.setCount( bucket.bucketLevel - 1 );

        if ( this.randomGreaterThanZero() ) {
          this.sendMessage( index );
        }
      }
  }

  randomGreaterThanZero(): boolean {
    return ( 1.0 > Math.random() * 2.0 );
  }
}
