import { ADD_TO_CART } from '../actions/cart'

const initailState = {
    items : [],
    totalAmount : 0
}

const cartReducer = ( state=initailState, action ) => {
    switch(action.type)
    {
        case ADD_TO_CART : {
            const itemToAdd = action.payload.itemToAdd
            const inCart = state.items.find(item => item.id == itemToAdd.id)
            console.log('here', inCart)
            if(inCart){

                // const item =  state.item
                // return {...state, items:state.items.concat(item)}
                return state
            }
            else{
                return {...state, items: state.items.concat(itemToAdd)}
            }
        }
        default : {
            return state
        }
    }
}

export default cartReducer