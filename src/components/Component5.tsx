/** Here we illustrate useEffect and fetching remote data */
import React, {useState, useEffect} from 'react';
import Component5ShowUser from './Component5ShowUser';
import { View, Text } from 'react-native';

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address:{
        street: string,
        suite: string,
        city: string,
        zipcode: string 
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

const Component5: React.FC = ()  => {

    //const [state, setState] = useState(initialState);
    const [user, setUser] = useState<User | null>(null);

    const fetchData = async () =>{
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
            let data = await response.json()
            setUser(data);   
        } catch (error) {
            console.log(error.message)
            setUser(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); //the second parameter [] will ensure that this useEffect runs only once.

    //conditionally show user if not undefined
    const showUser = () => {
        if (user!==null){
            return <Component5ShowUser user={user} />
        }
        else {
            return <Text>No user to display</Text>;
        }
    }

    return (
        <View>
            <Text>Greetings from Component5.</Text> 
            <View>
                {showUser()}
            </View>
        </View>
    )
}

export default Component5;
