import React from 'react';
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

type Props = {
    user: User //to accommodate undefined possibility
}
const Component5ShowUser: React.FC<Props> = (props)  => {
    const showUser = () => {
        const user: User = props.user; 
        try{
            if(user.id !== undefined){
                return(
                    <View>
                        <Text>User data fetched from remote source:</Text>
                        <Text>id: {user.id}</Text>
                        <Text>name: {user.name}</Text>
                        <Text>username: {user.username}</Text>
                        <Text>email: {user.email}</Text>
                        <Text>street address: {user.address.street}</Text>
                        <Text>phone: {user.phone}</Text>
                        <Text>website: {user.website}</Text>
                        <Text>company name: {user.company.name}</Text>
                    </View>
                )
            }else{
                return <Text>No user to display</Text>; //user is null or elements are undefined
            }
        }catch(error){
            return <Text>Problem displaying user: ${error.message}</Text>;
        }
    }
    
    return (
        <View>
            {showUser()} 
        </View>
    )
}

Component5ShowUser.defaultProps = {
    user: undefined
}
export default Component5ShowUser;
