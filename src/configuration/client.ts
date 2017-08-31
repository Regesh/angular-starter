import { APP } from './app';
import { defaultConfig } from './config';

import '../polyfills.browser';
// start client
window['client'] = new APP();
window['client'].config = defaultConfig;
// load runtime data
try{
    window['appInit']();
}catch(error){
    console.log('error!',error);
}
// start app
import '../main.browser';