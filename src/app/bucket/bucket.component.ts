import { Component, OnInit } from "@angular/core";
import { GaltonRunnerService } from '../galton-runner.service';

@Component({
  selector: "bucket-component",
  templateUrl: "./bucket.component.html",
  styleUrls: ["./bucket.component.css"]
})
export class BucketComponent implements OnInit {

  public bucketContent: number = 0;
  public bucketCapacity: number = 10000;

  public count: number = 10000;

  constructor(private runnerService: GaltonRunnerService) {
  }

  ngOnInit() {

    //this.runnerService.getCount.subscribe(( count ) => {
       //this.count =  count;
    //})
  }

  startBucket(n: number): void {
    alert("Clicked " + n);
  }
}

