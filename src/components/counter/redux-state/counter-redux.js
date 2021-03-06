import React from 'react'
import CounterDisplay from "./counter-display";
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState = {
    count: 666
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "UP" :
            return {
                count: prevState.count +1
            }
        case "DOWN":
            return {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

const store = createStore(reducer)

const CounterRedux = () =>
    <Provider store={store}>
        <div>
            <CounterDisplay/>
            <CounterUp/>
            <CounterDown/>
        </div>

    </Provider>

export default CounterRedux