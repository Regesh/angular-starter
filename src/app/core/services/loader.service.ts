import { Injectable } from '@angular/core';
// services
import { SDKService } from './sdk.service';
import { ConfigService } from './config.service';

/** ngrx */
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as appActions from '../../actions/app';

@Injectable()
export class LoaderService{
    constructor(
        private _sdkService: SDKService,
        private _configService: ConfigService,
        private store: Store<fromRoot.State>
    ){
        console.log('[app][service] loader service started');
    }
    load(){
        // load config data
        this._configService.load().then((config)=>{
            this.store.dispatch(new appActions.ConfigLoaded(config));
            // load sdk
            this._sdkService.load();
        });
    }
}