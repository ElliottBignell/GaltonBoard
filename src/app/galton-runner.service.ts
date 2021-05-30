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

  startBucket( bucket: any ): void {

      let balls:number = bucket.bucketLevel;
      let ball: number = 0; 

      for ( ball = 0; ball < balls; ball++ ) {

        let index:number = 1;

        let bar: number = 0; 

        for ( bar = 0; bar < 10; bar ++ ) {

          if ( this.randomGreaterThanZero() ) {
            this.bucketHit.emit( index++ );
          }
        }

        bucket.setCount( bucket.bucketLevel - 1 );
      }
  }

  randomGreaterThanZero(): boolean {
    return ( 1 > Math.random() * 2 );
  }
}
