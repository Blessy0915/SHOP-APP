import PRODUCTS from '../../data/dummy-data'
import Product from '../../models/Product'
import { DELETE_PRODUCT, UPDATE_PRODUCT, CREATE_PRODUCT } from '../actions/product'

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
        case CREATE_PRODUCT : {
            const product = action.payload.product
            const newProduct = new Product(
                new Date().toString(),
                'u1',
                product.title,
                product.imageURL,
                product.description,
                product.price
            )
            return {
                ...state,
                availableProducts : state.availableProducts.concat(newProduct),
                userProducts : state.userProducts.concat(newProduct)
            }
        }
        default : {
            return state
        }
    }
}

export default productsReducer