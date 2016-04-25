import initialState from './initialState'
export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 }
    case 'DECREMENT':
      return { counter: state.counter - 1 }
    default:
      return { counter: state.counter }
  }
}
