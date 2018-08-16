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
    return {
      ngModule: StoreModule,
      providers: [ {
        provide: 'config',
        useValue: config
      },reducerArray, Store, State ]
    };
  }
}
