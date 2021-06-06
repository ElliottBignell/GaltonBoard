import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GaltonRunnerService } from '../galton-runner.service';
import { Subscription } from 'rxjs';
import { BinComponent } from "../bin/bin.component";
import { BarsComponent } from "../bars/bars.component";
import { ViewChildren, QueryList } from "@angular/core";

@Component({
  selector: 'app-bins',
  templateUrl: './bins.component.html',
  styleUrls: ['./bins.component.css']
})
export class BinsComponent implements OnInit {

  @ViewChildren( BinComponent ) binComponents!: QueryList< BinComponent >;
  //@Output() increment = new EventEmitter();

  public numbers: Array<any> = [];
  private count: number = BarsComponent.getBottomBarsCount();

  message: any = {};
  subscription: Subscription;

  constructor(private service: GaltonRunnerService) {

    this.subscription = this.service.getMessage().subscribe(
        ( index ) => { 
          this.binComponents.get( index )?.increment( 1 )
        }
    );

    this.numbers = Array.from({ length: this.count }, () => ({
      count: 0
    }));
  }

  ngOnInit(): void 
  {
  }

  binWidth(): number {
    return 100 / BarsComponent.getRowCount();
  }
}
