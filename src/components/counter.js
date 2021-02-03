import React from "react";
import {connect, content} from 'react-redux';
// import {bindActionCreators} from "redux";
import * as actions from '../actions';

import './style.css';

const Counter = ({counter, inc, dec, res, rnd}) => {    // counter -store, others- actions
    return(
        <div className ='jumbotron'>
            <h1 className = "counter">{counter}</h1>
            <button 
                className = "btn inc"
                onClick = {inc}>+</button>
            <button 
                className = "btn dec"
                onClick = {dec}>-</button>
            <button 
                className = "btn res"
                onClick = {res}>RES</button>
            <button 
                className = "btn rnd"
                onClick = {rnd}>RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);