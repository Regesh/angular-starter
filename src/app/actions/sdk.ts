import { Action } from '@ngrx/store';

export const SDK_LOADED = '[SDK] SDK Loaded';

export class SDKLoaded implements Action {
  readonly type = SDK_LOADED;
  payload;
  constructor(payload){
    this.payload = payload;
  }
}

export type Actions = SDKLoaded;