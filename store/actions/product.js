export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const deleteProduct = (id) => {
    return{
        type : DELETE_PRODUCT,
        payload : {
            productID : id
        }
    }
}

export const createProduct = (product) => {
    return {
        type : CREATE_PRODUCT,
        payload : {
            product
        }
    }
}

export const updateProduct = (product, productID) => {
    return {
        type : UPDATE_PRODUCT,
        payload : {
            product,
            productID
        }
    }
}