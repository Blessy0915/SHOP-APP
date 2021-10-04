import React from 'react'
import { Platform, FlatList} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Color'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import OrderItem from '../../components/shop/OrderItem'

const OrdersScreen = () => {
    const orders = useSelector(state => state.orders.orders)
    return (
        <FlatList data={orders}
                  keyExtractor={(item,index) => item.id}
                  renderItem={(itemData) => <OrderItem amount={itemData.item.amount}
                                                       date={itemData.item.readableDate}
                                                       items={itemData.item.items}/>}/>
    )
}

OrdersScreen.navigationOptions = (navData) => {
    return {
        headerTitle : 'ORDERS',
        headerLeft : () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item name="MENU"
                      iconName={Platform.OS == 'android' ? 'md-menu' : 'ios-menu'}
                      color={Colors.primaryColor}
                      onPress={() => navData.navigation.toggleDrawer()}/>
            </HeaderButtons>
        )
   }
}

export default OrdersScreen
