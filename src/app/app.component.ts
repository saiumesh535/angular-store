import { Component } from '@angular/core';
import { Store, IDispatch, Selector} from 'angular-store-lib-src';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-store-lib';

  @Selector('username') $username: Observable<string>;

  constructor(private store: Store) {

    this.$username.pipe().subscribe((lol) => {
      console.log('username', lol);
    });

  }

  public onUpdate(username: string): void {
    this.store.dispatch({ type: 'username', payload: username  });
  }

}
