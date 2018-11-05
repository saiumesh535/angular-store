import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Store } from './store';
import { State } from './state';
import { IModuleConfig } from '..';
import { ReduxDevToolHelper } from './redux-devtool';

export interface Type extends Function { new (...args: any[]); }

@NgModule({
  declarations: [],
  exports: [],
  entryComponents: []
})
export class StoreModule {
  static forRoot(reducerArray: Type[], config?: IModuleConfig): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [ {
        provide: 'config',
        useValue: config
      }, Store, State, reducerArray, ReduxDevToolHelper ]
    };
  }
}
