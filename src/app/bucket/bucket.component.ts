import { Component, OnInit, Input } from "@angular/core";
import { GaltonRunnerService } from '../galton-runner.service';

@Component({
  selector: "bucket-component",
  templateUrl: "./bucket.component.html",
  styleUrls: ["./bucket.component.css"]
})
export class BucketComponent implements OnInit {

  public bucketContent: number = 0;
  public capacity: number = 10000;
  @Input() public bucketLevel: number = 10000;

  constructor(private runnerService: GaltonRunnerService) {
  }

  ngOnInit() {
  }

  fillLevel():number  {
    return ( 1.0 - this.bucketLevel / this.capacity ) * 100;
  }

  @Input() setCount( n: number ) {
    this.bucketLevel = n;  
  }
}

