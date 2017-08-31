import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const jsonOverride = require('json-override');
@Injectable()
export class ConfigService{
    constructor(
        private _http: HttpClient
    ){
        console.log('[app][service] config service started');
    }
    load(): Promise<any>{
        console.log('[app][service] loading config..');
        return new Promise((res,rej)=>{
            this._http.get('api/config/external.config.json').subscribe(externalConfig => {
                try{
                    client.config = jsonOverride(client.config,externalConfig,true);
                    res(client.config);
                }catch(error){
                    console.error('[app][service][error] '+error);
                }
            });
        });
    }
}