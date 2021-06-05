import { Component, OnInit, Input } from '@angular/core';
import { GaltonRunnerService } from '../galton-runner.service';

@Component({
  selector: 'bin-component',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css']
})
export class BinComponent implements OnInit {

  @Input() public binLevel: number = 0;

  public binContent: number = 0;
  public capacity: number = 10000;

  constructor(private runnerService: GaltonRunnerService) {
  }

  ngOnInit() {
  }

  fillLevel():number  {
    return ( 1.0 - this.binLevel / this.capacity ) * 100;
  }

  @Input() increment( n: number ) {
    this.binLevel += n;
  }
}
