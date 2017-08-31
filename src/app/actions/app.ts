import { Action } from '@ngrx/store';

export const CONFIG_LOADED = '[APP] Config Loaded';

export class ConfigLoaded implements Action {
  readonly type = CONFIG_LOADED;
  payload;
  constructor(payload){
    this.payload = payload;
  }
}

export type Actions = ConfigLoaded;