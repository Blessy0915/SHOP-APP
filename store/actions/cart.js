export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = ( item ) => {
    console.log(item,99)
    return {
        type : ADD_TO_CART,
        payload : {
            itemToAdd : item
        }
    }
}