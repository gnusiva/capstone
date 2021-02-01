import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-indicator',
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss']
})
export class StepIndicatorComponent implements OnInit, OnChanges {

  @Input() currentStep = 0;
  @Input() totalSteps = 0;

  arr1: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.arr1 = Array.from( Array(this.totalSteps).keys() );
  }

}
