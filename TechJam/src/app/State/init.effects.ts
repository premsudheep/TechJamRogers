import {Actions, Effect, ofType} from "@ngrx/effects";
import {INIT_ACTION, InitialAction, InitialActionFailed, InitialActionSuccess} from "./init.action";
import {map, mergeMap, catchError} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {of} from "rxjs";

@Injectable()
export class InitEffects {

  constructor(private action_: Actions, private http: HttpService) {}

  @Effect()
  getInitValue = this.action_.pipe(
    ofType(INIT_ACTION),
    mergeMap((action: InitialAction) => this.http.httpPost('/assets/mocks/deviceResponse.json', action.payload).pipe(
      map((response: any) => {
          return new InitialActionSuccess(response);
      }),
      catchError(response => of(new InitialActionFailed(response)))
      )
    )
  );
}
