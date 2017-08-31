import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, query } from '@angular/animations';
import { GamesService } from '../services/games.service';

/** ngrx */
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

const animDelay = 400;

@Component({
    selector:'lobby',
    template:`
    <div *ngIf="gamesLoaded;then content else other_content">here is ignored</div>
<ng-template #content>
<game-grid #gameGrid [game-ids]='(config$ | async)?.home?.gameList' [game-list]='users'></game-grid>
</ng-template>

<ng-template #other_content>
<div>loading..</div>
</ng-template>
    `
})
export class LobbyComponent implements OnInit{
    public gamesLoaded: boolean = false;
    public users;
    public gameIds = [130109];
    private _subscribers = [];
    config$: Observable<any> = this._store.select(fromRoot.getConfig);
    constructor(
        private _store: Store<fromRoot.State>,
        private _ref: ChangeDetectorRef,
        private _gamesService: GamesService){
        console.log('[app][component] lobby component started');
    }
    ngOnInit(){
        setTimeout(()=>{
            this._subscribers.push(this._gamesService.load()
                    .subscribe(users=>{
                        this.gamesLoaded = true;
                        //this.gameList = games.filter(game => this.gameIds.includes(parseInt(game.gameId)))
                        this.users = users.results.slice(0,250);
                        }));
        },animDelay);
    }
    ngOnDestroy(){
        this._gamesService.setDefaults();
        this._subscribers.forEach(sub => {
            sub.unsubscribe();
        });
    }
}