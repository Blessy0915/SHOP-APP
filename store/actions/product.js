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
    return async (dispatch) => {
        const response = await fetch('https://shop-app-6daaa-default-rtdb.firebaseio.com/products.json', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(product)
        })       
        const resData = await response.json();

        dispatch({
            type : CREATE_PRODUCT,
            product : product,
            id : resData.name
        })
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