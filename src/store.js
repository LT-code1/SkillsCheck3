import { createStore } from "redux";


const initialState = {
    name:""
};

export const UPDATE_NAME = "UPDATE_NAME";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NAME:
            return{...state, name:payload }
      default:
        return state;
    }
  }

  export default createStore(reducer);

