import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GaltonRunnerService } from '../galton-runner.service';
import { Subscription } from 'rxjs';
import { BinComponent } from "../bin/bin.component";
import { ViewChildren, QueryList } from "@angular/core";

@Component({
  selector: 'app-bins',
  templateUrl: './bins.component.html',
  styleUrls: ['./bins.component.css']
})
export class BinsComponent implements OnInit {

  @ViewChildren( BinComponent ) binComponents!: QueryList< BinComponent >;
  //@Output() increment = new EventEmitter();

  public binNumber: number = 0;
  public numbers: Array<any> = [];
  private count: number = 8;

  message: any = {};
  subscription: Subscription;

  constructor(private service: GaltonRunnerService) {

    this.subscription = this.service.getMessage().subscribe(
        ( index ) => { 
          this.binComponents.get( index )?.increment( 1 )
        }
    );

    this.numbers = Array.from({ length: 10 }, () => ({
      count: 0,
      index: 5
    }));
  }

  ngOnInit(): void 
  {
  }
}
