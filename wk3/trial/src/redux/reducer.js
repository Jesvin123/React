import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';


export const InitialState=
{
   dishes : DISHES,
   comments : COMMENTS
};

export const reducer = (state = InitialState, action) =>
{
    return state;
};