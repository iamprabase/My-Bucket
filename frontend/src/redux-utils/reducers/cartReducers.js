import { CART_ADD, CART_REMOVE } from '../constants'

export const cartReducers = (state = { 'cartItems': [] }, action) => {
  switch (action.type) {
    case CART_ADD:
      const itemAdded = action.payload;

      const itemExists = state.cartItems.find(item => item.product === itemAdded.product)

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            return item.product===itemAdded.product ? itemAdded : item
          })
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, itemAdded]
        }
      }
    case CART_REMOVE:
      const itemRemoved = action.payload;

      const hasCartExists = state.cartItems.find(item => item.product === itemRemoved)

      if (hasCartExists) {
        return {
          ...state,
          cartItems: state.cartItems.filter(item => {
            return item.product===itemRemoved 
          })
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems]
        }
      }
      
    default:
      return state;
  }
}