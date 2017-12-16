import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle} >Products!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    paddingTop: 15,
    shadowOpacity: 0.2,
    position: 'relative',
    elevation: 2
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
