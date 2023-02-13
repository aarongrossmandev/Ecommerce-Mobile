import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';
import {FontAwesome5} from '@expo/vector-icons';
import {Pressable,Text,View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectNumberOfItems} from './store/cartSlice';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{flexDirection: 'row',position: 'relative'}}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <View style={{position: 'absolute',top: -12,left: 5,backgroundColor: 'red',width: 15,borderRadius: '100%',justifyContent: 'center',alignItems: 'center'}}>
                  {numberOfItems > 0 &&
                    <Text style={{fontWeight: '500'}}>{numberOfItems}</Text>
                  }
                </View>
              </Pressable>
            )
          })}
        />
        <Stack.Screen name="Product Details" component={ProductDetailsScreen} options={{presentation: 'modal'}} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;