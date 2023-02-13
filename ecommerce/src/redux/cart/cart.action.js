import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.type";

const AddToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

const RemoveToCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const addcart = (data) => (dispatch) => {
  dispatch(AddToCart(data));
};

export const removeData = (data) => (dispatch) => {
  dispatch(RemoveToCart(data));
};
