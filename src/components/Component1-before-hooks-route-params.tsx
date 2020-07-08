import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

//define type for expected param list passed as prop to Component1Screen
type Component1ScreenStackParamList = {
  Component1Screen: {demoParam:string};
};

type Component1ScreenNavigationProp = StackNavigationProp<Component1ScreenStackParamList, 'Component1Screen'>;

type Component1ScreenRouteProp = RouteProp<Component1ScreenStackParamList, 'Component1Screen'>;

type Props = {
  route: Component1ScreenRouteProp;
  navigation: Component1ScreenNavigationProp;
};

const Component1: React.FC<Props> = ({route,navigation}) => {
  return (
    <SafeAreaView>
      <View>
          <Text>
              Hello from <Text style={{color: 'red'}}>Component1!</Text>
          </Text>
          <Text style={styles.text}>
            {`The value of the parameter passed to me through the navigation route is '${route.params.demoParam}'`}
          </Text>
          <Button title='Go Back' onPress={()=>navigation.goBack()}/>
      </View>
    </SafeAreaView>
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

export default Component1;