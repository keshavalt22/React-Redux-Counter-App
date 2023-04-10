import React from "react";
import { connect } from "react-redux";
import { updateStep } from "../store/action";

function Steps(props) {

    function handleClick(step) {
        props.dispatch(updateStep(step))
    }
    return (
        <div>
            <h3>Steps</h3>
            <button
                className={props.steps === 5 && "active"}
                onClick={() => handleClick(5)}
            >5</button>
            <button
                className={props.steps === 10 && "active"}
                onClick={() => handleClick(10)}
            >10</button>
            <button
                className={props.steps === 15 && "active"}
                onClick={() => handleClick(15)}
            >15</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        steps: state.step
    }
}

export default connect(mapStateToProps)(Steps);