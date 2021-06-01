import axios  from 'axios'
import { CART_ADD, CART_REMOVE } from '../constants'

export const addCartItems = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  dispatch({
    type: CART_ADD,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      countInStock: data.countInStock,
      quantity
    }
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))

}

export const removeCartItems = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE,
    payload: {
      product: id
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};