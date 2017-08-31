/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy 
} from '@angular/core';

/** ngrx */
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';


import { LoaderService } from './core/services/loader.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
      <routes [sdk-loaded]="sdkLoaded$ | async" [routes]="(config$ | async)?.routes"></routes>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit{
  config$: Observable<any> = this._store.select(fromRoot.getConfig);
  sdkLoaded$: Observable<boolean> = this._store.select(fromRoot.getSDKLoaded);
  constructor(
    private _store: Store<fromRoot.State>,
    private _loader: LoaderService
  ) {}
  ngOnInit(){
    this._loader.load();
  }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
