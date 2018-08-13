import { ModuleWithProviders, ClassProvider } from '@angular/core';
import { NgModule } from '@angular/core';
import { Dispatch } from './dispatch';
import { Store } from './store';

@NgModule({
  declarations: [],
  exports: [],
  entryComponents: []
})
export class StoreModule {
  static forRoot(reducerArray: any[]): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [ reducerArray, Dispatch, Store ]
    };
  }
}
