import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import ProductListing from '../screens/shop/ProductListingScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import Colors from '../constants/Color'

const ProductNavigator = createStackNavigator(
    {
        ProductListing : ProductListing,
        ProductDetail : ProductDetailsScreen
    },
    {
        defaultNavigationOptions : {
            headerStyle : {
                backgroundColor : Platform.OS == 'android' ? Colors.primaryColor : 'white'
            },
            headerTintColor : Platform.OS == 'android' ? 'white' : Colors.primaryColor  
        }
    }
)

export default createAppContainer(ProductNavigator)