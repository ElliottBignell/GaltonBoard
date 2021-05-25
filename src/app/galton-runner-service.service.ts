import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaltonRunnerService {

  public bucketHit: EventEmitter< number > = new EventEmitter< number >();

  constructor() { }

  startBucket( n: number ): void {

    balls:number = 10000;
    ball: number = 0; 

    for ( ball = 0; ball < balls; ball++ ) {

      index:number = 1;

      bar: number = 0; 

      for ( bar = 0; bar < 10; bar ++ ) {

        if ( randomGreaterThanZero() ) {
          index++;
        }
    }

    this.bucketHit.emit( index );
  }

  randomGreaterThanZero() {
  }
}
