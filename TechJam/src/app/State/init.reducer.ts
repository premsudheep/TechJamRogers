import {INIT_ACTION} from "@ngrx/store-devtools/src/reducer";
import {INIT_ACTION_FAILED, INIT_ACTION_SUCCESS} from "./init.action";

export function initReducer(state = {}, action) {
  switch(action.type) {
    case INIT_ACTION:
      return {...state, loading: false, initValue: action.payload};

    case INIT_ACTION_SUCCESS:
      return {...state, initValue: action.payload, fetched: true};

    case INIT_ACTION_FAILED:
      return {...state, loading: false, errors: action.payload};

    default: return state;
  }

}
