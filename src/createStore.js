export default function createStore(reducer){
// your code here!
  let state;
  let listeners = [];

  const getState = () => {
    return state;
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
   state = reducer(state, action)
   listeners.forEach( listener => listener() )
  }

  dispatch({})

  return {
    dispatch: dispatch,
    getState: getState,
    subscribe: subscribe
  }
}
