import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Product=({src})=>{

    return(
      //  <Text>{src} </Text>
      <Image
          style={{width: 200, height: 200}}
          source={{uri: src}}
        />

    );

}
export default Product;