import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member } from '../../models/member';

@Component({
  selector: 'lm-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  @Input() members: Member[];
  @Output() memberSelected: EventEmitter<Member> = new EventEmitter<Member>();

  displayedColumns: string[] = ['firstName', 'lastName', 'nickName'];

  constructor() { }

  ngOnInit() {
  }

  selectMember(member: Member): void {
    this.memberSelected.emit(member);
  }
}
