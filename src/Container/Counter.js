import React,{Component} from 'react';
import Counter from '../Component/Counter';

import {increment,decrement} from '../Redux/Action'
import {connect} from 'react-redux';


function mapState(state,ownProps) {
    return {
        value: state[ownProps.caption]
    }
}

function mapDispatch(dispatch,ownProps) {
    return {
        Increment: () => {
            dispatch(increment(ownProps.caption))
        },
        Decrement: () => {
            dispatch(decrement(ownProps.caption))
        }
    }
}

export default connect(mapState,mapDispatch)(Counter)