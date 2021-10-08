import Product from '../../models/Product'

export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const SET_PRODUCTS = 'SET_PRODUCTS'

export const fetchProducts = () => {
    return async (dispatch) => {
        try{
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
        catch(err){
            throw err
        }
    }
}
export const deleteProduct = (id) => {
    return async (dispatch) => {
        try{
            const response = await fetch(`https://shop-app-6daaa-default-rtdb.firebaseio.com/products/${id}.json`, {
                method : 'DELETE',
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            const prodRes = await response.json()
            dispatch({
                type : DELETE_PRODUCT,
                payload : {
                    productID : id
                }
            })
        }
        catch(err){
            throw err
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
    return async (dispatch) => {
        try{
            const response = await fetch(`https://shop-app-6daaa-default-rtdb.firebaseio.com/products/${productID}.json`,{
                method : 'PATCH',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    title : product.title,
                    description : product.description,
                    imageURL : product.imageURL
                })
            })
            const productRes = await response.json()
        }catch(err){
            throw err
        } 
        dispatch({
            type : UPDATE_PRODUCT,
            payload : {
                product : product,
                productID : productID
            }
        })  
    }
}