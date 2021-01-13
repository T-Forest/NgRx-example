import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { reducers, metaReducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateSerializability: false,  //デフォルトと同じ設定(false)
        strictStateImmutability: false,     //デフォルトと同じ設定(false)
        strictActionSerializability: false, //デフォルトと同じ設定(false)
        strictActionImmutability: false,    //デフォルトと同じ設定(false)
        strictActionWithinNgZone: false,    //デフォルトと同じ設定(false)
      }
    }),
    EffectsModule.forRoot([]),
  ]
})
export class AppStoreModule {}
