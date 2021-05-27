import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaltonRunnerService {

  public bucketHit: EventEmitter< number > = new EventEmitter< number >();

  constructor() { }

  getCount() {
    return 100;
  }

  startBucket( n: number ): void {

      let balls:number = 10000;
      let ball: number = 0; 

      for ( ball = 0; ball < balls; ball++ ) {

        let index:number = 1;

        let bar: number = 0; 

         for ( bar = 0; bar < 10; bar ++ ) {

             if ( this.randomGreaterThanZero() ) {
                 index++;
             }
         }

         this.bucketHit.emit( index );
      }
  }

  randomGreaterThanZero(): boolean {
    return ( 1 > Math.random() * 2 );
  }
}
