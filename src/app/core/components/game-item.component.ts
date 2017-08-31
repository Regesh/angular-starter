import { Component, Input } from '@angular/core';
@Component({
    selector:'game-item',
    template:`
        <span>
            {{game.name.first + game.name.last}}
            <img src="./assets/img/placeholder.png" [lazyLoad]="game.picture.large" />
        </span>
    `
})
export class GameItemComponent{
    @Input('game-data') game;
}