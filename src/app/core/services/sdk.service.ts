import { Injectable } from '@angular/core';
/** ngrx */
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as sdkActions from '../../actions/sdk';

@Injectable()
export class SDKService{
    constructor(
        private store: Store<fromRoot.State>
    ){
        console.log('[app][service] sdk service started');
    }
    load(){
        this.createInitFunction(this);
        this.loadScript();
    }
    createInitFunction(context){
        // sdk init function here
            // ---> SDK is ready
                    let payload = {isAuth:true};
                    context.store.dispatch(new sdkActions.SDKLoaded(payload));
    }

    loadScript(){
        // sdk script loading here
    }
}