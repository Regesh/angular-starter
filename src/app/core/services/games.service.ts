import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class GamesService{
    private _gamesLoaded: boolean = false;
    constructor(
        private _http: HttpClient
    ){
        console.log('[app][service] games service started');
    }
    load() {
        return this._http.get('api/users/mock_users.json');
    }
    setDefaults(){
        this._gamesLoaded = false;
    }
    /** getters & setters  **/
    get gamesLoaded(){
        return this._gamesLoaded;
    }
    set gamesLoaded(loaded){
        this._gamesLoaded = loaded;
    }
}