import { ModuleWithProviders, ClassProvider } from '@angular/core';
import { NgModule } from '@angular/core';
import { Store } from './store';
import { State } from './state';
import { updateLogStatus } from './Utils';

@NgModule({
  declarations: [],
  exports: [],
  entryComponents: []
})
export class StoreModule {
  static forRoot(reducerArray: any[], isProduction?: boolean): ModuleWithProviders {
    updateLogStatus(isProduction || false);
    return {
      ngModule: StoreModule,
      providers: [ reducerArray, Store, State ]
    };
  }
}
