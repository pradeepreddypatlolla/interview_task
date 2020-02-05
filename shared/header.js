import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
const Filter=({navigation1})=>{

    const openMenu=()=>{
        navigation.openDrawer();
    }
    

    return(
        <View style={{width:"100%" ,height:"100%",flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
         
         <Button title="Phones"  value="Phones" onPress={()=>navigation1.navigate('FilterScreen',{val:"phones"})}/>
         <Button title="Laptops" value="Laptops"  onPress={()=>navigation1.navigate('FilterScreen',{val:"laptops"})} />
         <Button title="Chargers" value="chargers" onPress={()=>navigation1.navigate('FilterScreen',{val:"chargers"})}/>

        </View>
        
    )}
export default Filter;