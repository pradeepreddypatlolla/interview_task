import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer }from 'react-navigation';
import ProductScreen from '../screens/productScreen';
import Filter from '../shared/header';
import React from 'react';
import DetailsScreen from '../screens/detailsScreen';
import FilterScreen from '../screens/flterScreen';
const screens={
ProductScreen:{
    screen:ProductScreen,
    navigationOptions:({navigation})=>{
        return{
       // headerTitle:()=><Filter navigation1={navigation} data={this.state}/>
        }
    }
},
DetailsScreen:{
    screen:DetailsScreen,
    navigationOptions:({navigation})=>{
        return{
        //headerTitle:()=><Filter navigation1={navigation}/>
        }
}},
FilterScreen:{screen:FilterScreen,
    navigationOptions:({navigation})=>{
        return{
       // headerTitle:()=><Filter navigation1={navigation}/>
        }
    }
}
}
const HomeStack=createStackNavigator(screens);
export default createAppContainer(HomeStack);