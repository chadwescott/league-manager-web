import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lm-wild-card-indicator',
  templateUrl: './wild-card-indicator.component.html',
  styleUrls: ['./wild-card-indicator.component.scss']
})
export class WildCardIndicatorComponent implements OnInit {
  @Input() wildCard: string;

  constructor() { }

  ngOnInit() {
  }
}
