import Product from '../../models/Product'

export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const SET_PRODUCTS = 'SET_PRODUCTS'

export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await fetch('https://shop-app-6daaa-default-rtdb.firebaseio.com/products.json')
        const productsRes = await response.json()
        const products = []
        for(const key in productsRes){
            products.push(new Product(
                key,
                'u1',
                productsRes[key].title,
                productsRes[key].imageURL,
                productsRes[key].description,
                productsRes[key].price
            ) )
        }
        dispatch({
            type : SET_PRODUCTS,
            payload : {
                products
            }
        })
    }
}
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