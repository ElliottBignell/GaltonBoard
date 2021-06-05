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

  public bucketNumber: number = 0;
  public numbers: Array<any> = [];
  public barRows:    Array< Boolean > = [];
  public barColumns: Array< Boolean > = [];
  public columns:number = 10;
  public rows:number    = 10;

  private count: number = 8;

  constructor(private service: GaltonRunnerService) {

    this.numbers = Array.from({ length: 10 }, () => ({
      count: 10000,
      index: 5
    }));
    this.barColumns = Array.from({ length: 10 }, () => false );
    this.barRows    = Array.from({ length: 10 }, () => false );
  }

  ngOnInit(): void {}

  startBucket( bucket: BucketComponent ): void 
  {
    this.service.startBucket( bucket );
  }

  sendMessage(): void {
    this.service.sendMessage( 300 );   
  }

  clearMessage():void{
    this.service.clearMessage();
  }
}
