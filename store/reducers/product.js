import PRODUCTS from '../../data/dummy-data'

const initailState = {
    availableProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(product => product.ownerID == 'u1')
}

const productsReducer = ( state=initailState, action ) => {
    return state
}

export default productsReducer