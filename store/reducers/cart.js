import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'
import CartItem from '../../models/CartItem'
import  { ADD_ORDER } from '../actions/order'
import { DELETE_PRODUCT } from '../actions/product'

const initailState = {
    items : {},
    totalAmount : 0
}

const cartReducer = ( state=initailState, action ) => {
    switch(action.type)
    {
        case ADD_TO_CART : {
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
        case REMOVE_FROM_CART : {
            const id = action.payload.productID
            let updatedCart
            if(state.items[id].quantity > 1){
                updatedCart = new CartItem(
                    state.items[id].quantity - 1,
                    state.items[id].productPrice,
                    state.items[id].productTitle,
                    state.items[id].sum - state.items[id].productPrice
                )
                updatedCart = {...state.items, [id]: updatedCart}
            }
            else{
                updatedCart={...state.items}
                delete updatedCart[id]
            }
            return { 
                ...state,
                items : updatedCart,
                totalAmount : state.totalAmount - state.items[id].productPrice
            }
        }
        case ADD_ORDER : {
            return initailState
        }
        case DELETE_PRODUCT : {
            const productID = action.payload.productID
            if(state.items[productID]){
                const updatedCart = {...state.items}
                delete updatedCart[productID]
                return {
                    ...state,
                    items : updatedCart,
                    totalAmount : state.totalAmount - state.items[productID].sum
                }
            }
            else {
                return {...state}
            }
        }
        default : {
            return state
        }
    }
}

export default cartReducer