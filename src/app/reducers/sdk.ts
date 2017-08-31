import * as sdk from '../actions/sdk';

export interface State {
  sdkLoaded:boolean
}

const initialState: State = {
  sdkLoaded: false
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case sdk.SDK_LOADED:
    return Object.assign({},state,{sdkLoaded:true});
    default:
      return state;
  }
}

export const getSDKLoaded = (state: State) => state.sdkLoaded;