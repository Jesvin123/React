import { createStore } from 'redux';
import { InitialState,reducer} from './reducer';

export const Configurestore = () =>
{
    const store = createStore(reducer,InitialState);
    return store;
};
