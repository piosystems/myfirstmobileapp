/** Here, we rewrite Component3, using an object for state variable */
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type Props = {
    name?: string;
}

const Component4: React.FC<Props> = (props)  => {
    //const [state, setState] = useState(initialState);

    /* Let us optionally combine the state variables
    const [name, setName] = useState(props.name);
    const [count, setCount] = useState(0);
    */
    const [state, setState] = useState({name: props.name, count: 0})

    const changeNameToGreet = (text: string) => {
        //setName(text);
        setState({...state, name: text});
    }

    return (
        <View style={styles.text}>
            <Text>Hello {state.name}. Greetings from from React-Native.</Text> 
            <View>
                <TextInput placeholder="Write a name here..." onChangeText={changeNameToGreet} autoFocus/>
            </View>
            <View>
                <Text>You clicked {state.count} times</Text>
                <Button title="Click Me" onPress={() => setState({...state, count: state.count+=1})}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    text:{
      color: '#fff',
      fontSize: 20,
      padding: 6,
      alignItems: 'center',
      marginBottom: 3
    }
});

Component4.defaultProps = {
    name: "John"
} 

export default Component4;