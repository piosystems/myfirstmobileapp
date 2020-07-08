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
type HomeScreenStackParamList = {
    HomeScreen: undefined; //no parameters expected to be passed to route when called
    Component1Screen: {demoParam:string};
    Component2Screen: {title:string} | undefined; //means that title may be optionally passed
    Component4Screen: undefined;
    Component5Screen: undefined;
    Component6Screen: undefined;
    Component7Screen: undefined;
    Component8Screen: undefined;
    Component9Screen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<HomeScreenStackParamList, 'HomeScreen'>;

//if we are using route as well, make below available
//type HomeScreenRouteProp = RouteProp<HomeScreenStackParamList, 'HomeScreen'>;

type Props = {
    //route: HomeScreenRouteProp; //if using route
    navigation: HomeScreenNavigationProp;
};

/*Let's create a Home component that App will display as Home Screen. It can be whatever name you want*/
const Home: React.FC<Props> = ({navigation}) => { //We are not using route here at all; so we can as well pass only navigation
  return(
    <SafeAreaView style={styles.container}>
        <Button title="Go to Component1"
          onPress={()=> navigation.navigate('Component1Screen',{
            demoParam: 'This is a route demo parameter'//notice here that you can pass parameters to any navigate route
          }
          )}/>
        <Button title="Go to Component2"
          onPress={()=> navigation.navigate('Component2Screen')}/>
        <Button title="Go to Component4"
          onPress={()=> navigation.navigate('Component4Screen')}/>
        <Button title="Go to Component5"
          onPress={()=> navigation.navigate('Component5Screen')}/>
        <Button title="Go to Component6"
          onPress={()=> navigation.navigate('Component6Screen')}/>
        <Button title="Go to Component7"
          onPress={()=> navigation.navigate('Component7Screen')}/>
        <Button title="Go to Component8"
          onPress={()=> navigation.navigate('Component8Screen')}/>
        <Button title="Go to Component9"
          onPress={()=> navigation.navigate('Component9Screen')}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
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