import { addOrder, ADD_ORDER } from '../actions/order'
import Order from '../../models/Order'

const initailState = {
    orders : []
}

const ordersReducer = ( state=initailState, action ) => {
    switch(action.type){
        case ADD_ORDER : {
            const items = action.payload.orderData.items
            const amount = action.payload.orderData.amount

            const newOrder = new Order(
                new Date().toString(),
                items,
                amount,
                new Date()
            )
            return {
                ...state,
                orders : state.orders.concat(newOrder)
            }
        }
    }
}