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

  public showAddGame() {
    this.changePage('add-game');
  }

  public showAdministration() {
    this.changePage('administration');
  }

  public showGames() {
    this.changePage('games');
  }

  public showGame(id: string) {
    this.changePage(`games/${id}`);
  }

  public showHome() {
    this.changePage('');
  }

  public showLeagues() {
    this.changePage('leagues');
  }

  public showLeague(id: string) {
    this.changePage(`leagues/${id}`);
  }

  public showSignIn() {
    this.changePage('sign-in');
  }

  private changePage(route: string) {
    this.router.navigate([route]);
    this.pageChanged.emit();
  }
}
