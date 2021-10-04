import React from 'react'
import { Platform, Text, View} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Colors from '../../constants/Color'
import CustomHeaderButton from '../../components/UI/HeaderButton'

const OrdersScreen = () => {
    return (
        <View>
            <Text>hh</Text>
        </View>
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
