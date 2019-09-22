import {Store} from 'redux';
import {ACTION_TYPES} from './actionsTypes';
import {ApiRequest} from '../../apis/ApiRequest';
import {setToken} from "../auth";
import {setMember} from "./actions";

const key = process.env.REACT_APP_KEY;

const fetchToken = async (code: string) => {
    try {
        // console.log('validToken:' + this.state.token);
        console.log('key:' + key);
        const AUTH_URL = `https://api.trello.com/1/members/me/boards?key=${key}&token=${code}`;
        const boards = await ApiRequest.get(AUTH_URL);
        console.log('^^^^^^^^^^^^^^^^^^^^^^');
        console.log('^^^^^^^^^^^^^^^^^^^^^^');
        console.log('boards: ' + JSON.stringify(boards));
        console.log('^^^^^^^^^^^^^^^^^^^^^^');
        console.log('^^^^^^^^^^^^^^^^^^^^^^');
        return boards;
    } catch (e) {
        throw e;
    }
};

const memberMiddleware = ({getState, dispatch}: Store) => (next: any) => (action) => {
    const state = getState();

    let token1 = state.auth.token;
    console.log('&&&&&&&&&&&');
    console.log('token2: ' + token1);
    console.log('&&&&&&&&&&&');
    if (action.type === ACTION_TYPES.FETCH_MEMBER) {

        fetchToken(token1).then((member: any) => {
            console.log('member: ' + JSON.stringify(member));
            dispatch(setMember(member));
        });
    }

    next(action);
};

export const memberMiddlewares = [memberMiddleware];
