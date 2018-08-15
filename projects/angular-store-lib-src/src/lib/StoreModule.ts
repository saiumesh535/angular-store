import { ModuleWithProviders, ClassProvider } from '@angular/core';
import { NgModule } from '@angular/core';
import { Store } from './store';
import { State } from './state';
import { updateLogStatus } from './Utils';
import { IModuleConfig } from '..';

@NgModule({
  declarations: [],
  exports: [],
  entryComponents: []
})
export class StoreModule {
  static forRoot(reducerArray: any[], config?: IModuleConfig): ModuleWithProviders {
    updateLogStatus(config.logger || false);
    return {
      ngModule: StoreModule,
      providers: [ reducerArray, Store, State ]
    };
  }
}
