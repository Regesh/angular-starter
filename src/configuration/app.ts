const jsonOverride = require('json-override');

export class APP{
    private _config;
    constructor(){
        console.log('[client] CGPApp created');
    }
    initlize(runtimeData){
        this._config = jsonOverride(this._config,runtimeData,true);
    }
    // getters & setters
    get config(){return this._config}
    set config(conf){this._config = conf;}
};