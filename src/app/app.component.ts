import { Component } from '@angular/core';
import { Dispatch, IDispatch, Selector} from 'angular-store-lib-src';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-store-lib';

  @Selector('username') $username: Observable<string>;

  constructor(private di: Dispatch) {

    this.$username.pipe().subscribe((lol) => {
      console.log('username', lol);
    });

  }

  public onUpdate(username: string): void {
    this.di.dispatch({ type: 'username', payload: username  });
  }

}
