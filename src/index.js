import {createStore} from "redux";
import reducer from './reducer';
import {inc,dec,res,rnd} from './actions';

const store = createStore(reducer);
const {dispatch} = store;

const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (value) => dispatch(rnd(value));
const resDispatch = () => dispatch(res());

document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('res').addEventListener('click', resDispatch);
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rndDispatch(value)
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update)

// store.dispatch({type: 'INK'});
// store.dispatch({type: 'DEC'});
// store.dispatch({type: 'INK'});


// let state = reducer(undefined, {});

// state = reducer(state, {type: 'INK'});
// console.log(state);
// state = reducer(state, {type: 'INK'});
// console.log(state);

