export const ADD_ORDER = 'ADD_ORDER'

export const addOrder = ( cartItems, totalAmount ) => {
    return async (dispatch) => {
        const date = new Date().toString()
        const response = await fetch('https://shop-app-6daaa-default-rtdb.firebaseio.com/orders/u1.json', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                cartItems,
                totalAmount,
                date
            })
        })
        const orderRes = await response.json()
        dispatch({
            type : ADD_ORDER,
            payload : {
                orderData : {
                    items : cartItems,
                    amount : totalAmount,
                    date,
                    id : orderRes.name
                }
            }
        })
    }
    return {

    }
}