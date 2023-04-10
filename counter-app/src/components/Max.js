import React from "react"
import { connect } from "react-redux"
import { updateMax } from "../store/action"

function Max(props) {

    function handleClick(max) {
        props.dispatch(updateMax(max))
    }
    return (
        <div>
            <h3>Max Value</h3>
            <button
                className={props.max === 15 && "active"}
                onClick={() => handleClick(15)}
            >15</button>
            <button
                className={props.max === 100 && "active"}
                onClick={() => handleClick(100)}
            >100</button>
            <button
                className={props.max === 200 && "active"}
                onClick={() => handleClick(200)}
            >200</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        max: state.max
    }
}

export default connect(mapStateToProps)(Max)