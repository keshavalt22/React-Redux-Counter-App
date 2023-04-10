
import Steps from './steps';
import Max from './Max';
import { connect } from 'react-redux';
import { decrement, increment, rest } from '../store/action';


function App(props) {

  return (
    <div className='container'>
      <h1>{props.count}</h1>
      <div className='flex value'>
        <Steps />
        <Max />
      </div>
      <div>
        <button
          className="increment"
          onClick={() => props.dispatch(increment())}
        >Increment</button>
        <button
          className="decrement"
          onClick={() => props.dispatch(decrement())}
        >Decrement</button>
        <button
          className="reset"
          onClick={() => props.dispatch(rest())}
        >Reset</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.value,
  }
}

export default connect(mapStateToProps)(App);
