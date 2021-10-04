import PRODUCTS from '../../data/dummy-data'
import { DELETE_PRODUCT } from '../actions/product'

const initailState = {
    availableProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(product => product.ownerID == 'u1')
}

const productsReducer = ( state=initailState, action ) => {
    switch(action.type){
        case DELETE_PRODUCT : {
            const productID = action.payload.productID
            return {
                ...state,
                availableProducts : state.availableProducts.filter(product => product.id != productID),
                userProducts : state.userProducts.filter(product => product.id != productID)
            }
        }
        default : {
            return state
        }
    }
}

export default productsReducer