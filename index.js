import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import ProductList from './src/components/ProductList';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
        <Header name={'Products'} />
        <ProductList />
    </View>
  );
};


AppRegistry.registerComponent('albums', () => App);
