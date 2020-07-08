import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Component1: React.FC = () => {

  //declare navigation using hook instead of going through props
  const navigation = useNavigation();
  //declare route using hook instead of going through props
  //const route = useRoute();
  //below is the right declaration for TypeScript but looks complicated. Get tip from the line above before commenting out.
  const route = useRoute<RouteProp<Record<string, {demoParam: string}>, string>>();

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