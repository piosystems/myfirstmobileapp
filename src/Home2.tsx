import React from 'react';
import {StyleSheet, Button, SafeAreaView} from 'react-native';
/**
 * Import StackNavigationProp and RouteProp  which will be used to create the types.
 * See the use below in our type Props definition
 */

import { StackNavigationProp } from '@react-navigation/stack';
//import { RouteProp } from '@react-navigation/native';//Not in use here

/**
 * Next, let us set up the Prop types that we shall use in our HomeScreen Component
 * Here we enlist screen names to be displayed as routes along with the respective parameter types to be passed.
 */
type Home2ScreenStackParamList = {
    Home2Screen: undefined; //no parameters expected to be passed to route when called
    Component6Screen: undefined;
    Component7Screen: undefined;
    Component8Screen: undefined;
    Component9Screen: undefined;
    Component10Screen: undefined;
    Component11Screen: undefined;
};

type Home2ScreenNavigationProp = StackNavigationProp<Home2ScreenStackParamList, 'Home2Screen'>;

//if we are using route as well, make below available
//type HomeScreenRouteProp = RouteProp<HomeScreenStackParamList, 'HomeScreen'>;

type Props = {
    //route: HomeScreenRouteProp; //if using route
    navigation: Home2ScreenNavigationProp;
};

/*Let's create a Home component that App will display as Home Screen. It can be whatever name you want*/
const Home: React.FC<Props> = ({navigation}) => { //We are not using route here at all; so we can as well pass only navigation
  return(
    <SafeAreaView style={styles.container}>
        <Button title="Go to Component6"
          onPress={()=> navigation.navigate('Component6Screen')}/>
        <Button title="Go to Component7"
          onPress={()=> navigation.navigate('Component7Screen')}/>
        <Button title="Go to Component8"
          onPress={()=> navigation.navigate('Component8Screen')}/>
        <Button title="Go to Component9"
          onPress={()=> navigation.navigate('Component9Screen')}/>
        <Button title="Go to Component10"
          onPress={()=> navigation.navigate('Component10Screen')}/>
        <Button title="Go to Component11"
          onPress={()=> navigation.navigate('Component11Screen')}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'stretch',
      justifyContent: 'center',
      fontSize: 18
    },
    logo:{
      width: 133,
      height: 55,
      paddingBottom: 50
  }
});

export default Home;