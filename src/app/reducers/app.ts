import * as appActions from '../actions/app';
import * as sdkActions from '../actions/sdk';
const jsonOverride = require('json-override');

export interface State {
  config:any
}

const initialState: State = {
  config: {
    internal_routes:{
      slots:{
        display:true
      }
    }
  }
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case sdkActions.SDK_LOADED:
    let newSlots = {display:false};
    newSlots = jsonOverride(state.config.routes.slots,newSlots,true);
    state.config.routes.slots = newSlots;
    return state;
    case appActions.CONFIG_LOADED:
    return {
      config: action.payload
    }
    default:
      return state;
  }
}

export const getConfig = (state: State) => state.config;