import { Component, OnInit } from '@angular/core';
import { GaltonRunnerService } from '../galton-runner.service';
import { BucketComponent } from "../bucket/bucket.component";
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.css']
})
export class BucketsComponent implements OnInit {

  @ViewChild(BucketComponent) bucketComponent!: BucketComponent;

  public numbers: Array<any> = [];
  public columns:number = 10;

  constructor(private service: GaltonRunnerService) {

    this.numbers = Array.from({ length: 10 }, () => ({
      count: 10000,
      index: 5
    }));
  }

  ngOnInit(): void {}

  startBucket( bucket: BucketComponent ): void 
  {
    this.service.startBucket( bucket );
  }

  getBucketCount(): number {
    return this.columns;
  }
}
