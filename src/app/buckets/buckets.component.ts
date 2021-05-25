import { Component, OnInit } from '@angular/core';
import { GaltonRunnerService } from '../galton-runner.service';

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.css']
})
export class BucketsComponent implements OnInit {

  public bucketNumber: number = 0;

  constructor( private runnerService: GaltonRunnerService ) { }

  ngOnInit(): void {
  }

  startBucket( n: number ): void {
    console.log("Clicked")
  }
}
