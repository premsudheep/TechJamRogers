import {initReducer} from "./init.reducer";
import {InitEffects} from "./init.effects";

export const reducers = {
  initValue: initReducer
};

export const effects = [
  InitEffects
];
