import { ADD_TO_CART } from '../actions/cart'
import CartItem from '../../models/CartItem'

const initailState = {
    items : {},
    totalAmount : 0
}

const cartReducer = ( state=initailState, action ) => {
    switch(action.type)
    {
        case ADD_TO_CART : {
            console.log(state)
            const addedProduct = action.payload.product
            const productTitle = addedProduct.title
            const productPrice = addedProduct.price

            if(state.items[addedProduct.id]){  //items.id?
                const incQuantity = state.items[addedProduct.id].quantity + 1
                const totalProductSum = state.items[addedProduct.id].sum + productPrice
                const updtedCartItem = new CartItem(incQuantity, productPrice, productTitle, totalProductSum)
                return {
                    ...state,
                    items : {...state.items, [addedProduct.id]: updtedCartItem},
                    totalAmount : state.totalAmount + productPrice
                }
            } 
            else {
                const newCartItem = new CartItem(1, productPrice, productTitle, productPrice)
                return {
                    ...state,
                    items  : {...state.items, [addedProduct.id] : newCartItem},
                    totalAmount : state.totalAmount + productPrice
                }
            }

        }
        default : {
            return state
        }
    }
}

export default cartReducer