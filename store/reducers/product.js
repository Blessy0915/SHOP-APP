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
        case UPDATE_PRODUCT : {
            const productID = action.payload.productID
            const product = action.payload.product

            const indexUserProduct = state.userProducts.findIndex(product => product.id === productID)
            const updatedUserProduct = new Product(
                productID,
                state.userProducts[indexUserProduct].ownerID,
                product.title,
                product.imageURL,
                product.description,
                state.userProducts[indexUserProduct].price
            )

            const updatedUserProductsArray = [...state.userProducts]
            updatedUserProductsArray[indexUserProduct] = updatedUserProduct

            const indexAvailableProducts = state.availableProducts.findIndex(product => product.id == productID)
            const updatedAvailabelProduct = new Product(
                productID,
                state.availableProducts[indexAvailableProducts].ownerID,
                product.title,
                product.imageURL,
                product.description,
                state.availableProducts[indexAvailableProducts].price
            )

            const updatedAvailabelProducts = [...state.availableProducts]
            updatedAvailabelProducts[indexUserProduct] = updatedAvailabelProduct

            return {
                ...state,
                availableProducts : updatedAvailabelProducts,
                userProducts :  updatedUserProductsArray
            } 
        }
        default : {
            return state
        }
    }
}

export default productsReducer