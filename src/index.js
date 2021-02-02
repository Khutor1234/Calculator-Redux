import {createStore, bindActionCreators} from "redux";
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, rnd, res} = bindActionCreators(actions,dispatch); // на выходе обернутые в dispatch

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('res').addEventListener('click', res);
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value)
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);