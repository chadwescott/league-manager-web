import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'lm-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() firstDisabled = false;
  @Input() previousDisabled = false;
  @Input() nextDisabled = false;
  @Input() lastDisabled = false;

  @Output() first = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() last = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFirst() {
    this.first.emit();
  }

  onPrevious() {
    this.previous.emit();
  }

  onNext() {
    this.next.emit();
  }

  onLast() {
    this.last.emit();
  }

  onKeyup(event) {
    switch (event.key) {
      case 'ArrowUp':
        if (event.ctrlKey) { this.first.emit(); }
        break;
      case 'ArrowLeft':
        if (event.ctrlKey) { this.previous.emit(); }
        break;
      case 'ArrowRight':
        if (event.ctrlKey) { this.next.emit(); }
        break;
      case 'ArrowDown':
        if (event.ctrlKey) { this.last.emit(); }
        break;
    }
  }
}
