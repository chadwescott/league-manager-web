import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lm-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
