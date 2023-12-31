import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { setLoadingSpinner } from "./shared.action";

export const spinnerReducer = createReducer(initialState,
    on(setLoadingSpinner,(state,action)=>{
    return {
        state,
        showLoading: action.status
    };
}))

