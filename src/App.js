import React,{Component,PropTypes} from 'react';
import {render} from 'react-dom';
import store from './Redux/Store/Store.js'
import {Provider} from 'react-redux';
import ControlPanel from './Container/ControlPanel.js'
import './style/common.less'

render(
    <Provider store={store}>
        <ControlPanel/>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);

