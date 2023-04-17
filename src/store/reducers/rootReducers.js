import { appReducers } from "./appReducers";
import { combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import { storage } from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2
};



export const rootReducers = combineReducers({
  app: appReducers,
});
