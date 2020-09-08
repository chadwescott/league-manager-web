import * as tslib_1 from "tslib";
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { CoreModule } from '../core/core.module';
import { PlayerFormComponent } from './components/player-form/player-form.component';
let PlayerModule = class PlayerModule {
};
PlayerModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            PlayerListComponent,
            PlayerDetailsComponent,
            PlayerFormComponent
        ],
        imports: [
            CommonModule,
            CoreModule
        ],
        exports: [
            PlayerListComponent,
            PlayerDetailsComponent
        ]
    })
], PlayerModule);
export { PlayerModule };
//# sourceMappingURL=player.module.js.map