import { Injectable } from '@angular/core';
import { GamesService } from '../services/games.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}  from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private _gamesService: GamesService,
    private router: Router) {
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this._gamesService.gamesLoaded;
  }

}