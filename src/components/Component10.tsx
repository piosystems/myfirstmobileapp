import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

//Below requires expo install react-native-webview
import { WebView } from 'react-native-webview';


//run expo install @react-native-community/hooks and then
import { useDimensions } from '@react-native-community/hooks';

const Component10: React.FC = () => {
  const [loading, setLoading] = useState(true);
  //const screenWidth = Math.round(Dimensions.get('window').width);
  //const screenHeight = Math.round(Dimensions.get('window').height);
  //OR
  //const screenWidth = Math.round(useWindowDimensions().width);
  //const screenHeight = Math.round(useWindowDimensions().height);
  //OR
  //const dimensions = useDimensions();
  //const screenWidth = Math.round(dimensions.screen.width);
  //const screenHeight = Math.round(dimensions.screen.height);

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://piosystems.github.io/vr/learn-aframe/' }} 
        style={{ flex: 1 }}
        onLoad={() => {
          setLoading(false);
        }}>
      </WebView>
      {loading && 
        <ActivityIndicator size="large" 
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center' 
          }}
        />}
    </View>
    
  );
}

const styles = StyleSheet.create({
  text:{
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 6,
    alignItems: 'center'
  }
});

export default Component10;