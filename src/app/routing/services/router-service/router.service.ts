import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  @Output() pageChanged = new EventEmitter();
  title: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof (ActivationEnd)) {
        const e = event as ActivationEnd;
        this.title = e.snapshot.data['title'];
        this.pageChanged.emit();
      }
    });
  }

  public showAdministration() {
    this.changePage('administration');
  }

  public showHome() {
    this.changePage('');
  }

  public showLeagues() {
    this.changePage('leagues');
  }

  public showSignIn() {
    this.changePage('sign-in');
  }

  private changePage(route: string) {
    this.router.navigate([route]);
    this.pageChanged.emit();
  }
}
