import React from 'react'
import {connect} from "react-redux";

const CounterDisplay = ({myCount}) =>
    <h1>
        Count: {myCount}
    </h1>

const stateToPropertyMappter = (state) => {
    return {
        myCount: state.count
    }
}
// connect(stateToPropertyMappter) 返回一个函数，这个函数再以CounterDisplay
// 为输入值。 且从上一层stateToPropertyMappter 中获取 state.count 的信息
export default connect(stateToPropertyMappter)(CounterDisplay)