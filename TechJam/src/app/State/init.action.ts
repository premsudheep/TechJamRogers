import {Action} from "@ngrx/store";

export const INIT_ACTION = 'INIT_ACTION';
export const INIT_ACTION_SUCCESS = 'INIT_ACTION_SUCCESS';
export const INIT_ACTION_FAILED = 'INIT_ACTION_FAILED';

export class InitialAction implements Action {
  readonly type = INIT_ACTION;
  constructor(public payload: any) {};
}

export class InitialActionSuccess implements Action {
  readonly type = INIT_ACTION_SUCCESS;
  constructor(public payload:any) {};
}

export class InitialActionFailed implements Action {
  readonly type = INIT_ACTION_FAILED;
  constructor(public payload:any) {};
}
