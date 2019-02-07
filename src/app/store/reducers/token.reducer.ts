import { Action } from '@ngrx/store';
import { User } from '../models/user.interface';

export interface TokenState {
    loading: boolean;
    error: boolean;
    token: string;
}

const initialState: TokenState = {
    loading: false,
    error: false,
    token: undefined
};

export const TokenActionTypes = {
    TOKEN_RETRIEVED_SUCCESS: 'TOKEN_RETRIEVED_SUCCESS'
};


export class TokenAction implements Action {
    type = TokenActionTypes.TOKEN_RETRIEVED_SUCCESS;

    constructor(public token: string) {
    }
}

export function tokenReducer(state: TokenState = initialState, action: TokenAction) {

    switch (action.type) {
        case TokenActionTypes.TOKEN_RETRIEVED_SUCCESS:
            return { ...state, token: action.token, loading: false };

        default:
            return state;
    }
}
