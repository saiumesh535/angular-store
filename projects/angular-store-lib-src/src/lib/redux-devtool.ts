import { Injectable } from '@angular/core';
import { ReduxDevTool, ReduxSend } from './Types';
import { State } from './state';

@Injectable()
export class ReduxDevToolHelper {
    private  devtoolsExtension: ReduxDevTool = null;
    constructor(private state: State) {
        const globalDevtools = window['__REDUX_DEVTOOLS_EXTENSION__'] || window['devToolsExtension'];
        console.log('hey!!!');
        if (globalDevtools) {
            this.devtoolsExtension = globalDevtools.connect({
                name: 'saiumesh',
                disabled: false,
            }) as ReduxDevTool;
            this.state.getStateObs.subscribe(this.updateDevTool);
        }
    }

    private updateDevTool(input: ReduxSend): void {
        this.devtoolsExtension.send(input);
    }

}
