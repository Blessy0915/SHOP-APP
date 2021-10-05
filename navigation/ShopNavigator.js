import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Platform } from 'react-native'
import ProductListing from '../screens/shop/ProductListingScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import UsersProductsScreen from '../screens/user/UsersProductsScreen'
import EditProductScreen from '../screens/user/EditProductScreen'
import Colors from '../constants/Color'
import { Ionicons } from '@expo/vector-icons'

const defaultNavigationOptions = {
    headerStyle : {
        backgroundColor : Platform.OS == 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor : Platform.OS == 'android' ? 'white' : Colors.primaryColor  
}

const ProductNavigator = createStackNavigator(
    {
        ProductListing : ProductListing,
        ProductDetail : ProductDetailsScreen,
        Cart : CartScreen
    },
    {
        navigationOptions : {
            drawerIcon : (drawerData) => (
                <Ionicons size={25}
                          name={Platform.OS == 'android' ? 'md-list' : 'ios-list'}
                          color={drawerData.tintColor}/>
            )            
        },
        defaultNavigationOptions : defaultNavigationOptions
    }
)

const OrdersNavigator = createStackNavigator(
    {
        Orders : OrdersScreen
    },
    {
        navigationOptions : {
            drawerIcon : (drawerData) => (
                <Ionicons size={25}
                          name={Platform.OS == 'android' ? 'md-cart' : 'ios-cart'}
                          color={drawerData.tintColor}/>
            )            
        },
        defaultNavigationOptions : defaultNavigationOptions
    }
)

const AdminNavigator = createStackNavigator(
    {
        Admin : UsersProductsScreen,
        EditProduct : EditProductScreen
    },
    {
        navigationOptions : {
            drawerIcon : (drawerData) => (
                <Ionicons name={Platform.OS =='android' ? 'md-create' : 'ios-create'}
                          size={25}
                          color={drawerData.tintColor}/>
            )
        },
        defaultNavigationOptions : defaultNavigationOptions
    }
)

const shopNavigator = createDrawerNavigator(
    {
        Products : ProductNavigator,
        Orders : OrdersNavigator,
        Admin : AdminNavigator
    },
    {
        contentOptions : {
            activeTintColor : Colors.primaryColor
        }
    }
)

export default createAppContainer(shopNavigator)