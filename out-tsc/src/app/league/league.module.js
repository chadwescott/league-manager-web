import * as tslib_1 from "tslib";
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { PlayerModule } from '../player/player.module';
// Components
import { LeagueDetailsComponent } from './components/league-details/league-details.component';
// Services
import { LeagueService } from './services/league.service';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { LeagueHomeComponent } from './pages/league-home/league-home.component';
let LeagueModule = class LeagueModule {
};
LeagueModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            LeagueDetailsComponent,
            LeagueListComponent,
            LeagueHomeComponent
        ],
        imports: [
            CommonModule,
            CoreModule,
            PlayerModule
        ],
        exports: [
            LeagueDetailsComponent,
            LeagueListComponent
        ],
        providers: [
            LeagueService
        ]
    })
], LeagueModule);
export { LeagueModule };
//# sourceMappingURL=league.module.js.map