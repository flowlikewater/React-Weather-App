import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action){
  switch (action.type){
  case FETCH_WEATHER:
    // never push stuff into state
    // you do not mutate your state, you return a new array
    // make sure you are returning a new instance of state
    return state.concat([action.payload.data]);
    // alternative to above
    // returns [city, city, city]
    return [action.payload.data, ...state];
  }
  return state
}
