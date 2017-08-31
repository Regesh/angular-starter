import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector:'game-grid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:`
        <game-item *ngFor="let game of gameList"
         [game-data]='game'></game-item>
    `
})
export class GameGridComponent{
    @Input('game-list') gameList;
    @Input('game-ids') gameIds;
    constructor(){
        console.log('[app][component] game grid component started');
    }
}