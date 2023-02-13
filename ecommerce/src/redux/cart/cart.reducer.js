import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.type";

let init = {
  cart: [],
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      state.cart.push(action.payload)
      return {
        ...state,
        cart: state.cart,
      };
    }

    case REMOVE_FROM_CART: {
      let crt = state.cart.filter((el) => {
        return el.id !== action.payload.id;
      });
      return {
        ...state,
        cart: crt,
      };
    }

    default: {
      return state;
    }
  }
};
