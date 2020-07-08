import React from 'react';
import { View, Text, FlatList } from 'react-native';

type User = {
    id: string, //this needs to be string for keyExtractor in FlatList not to complain
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
    users?: User[] //array of users
}

const Component8ShowUser: React.FC<Props> = ({users})  => {
    
    return (
        <View>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View>
                        <Text>Id={item.id}</Text>
                        <Text>Name={item.name}</Text>
                        <Text>Username={item.username}</Text>
                        <Text>Email={item.email}</Text>
                        <Text>Street={item.address.street}</Text>
                        <Text>City={item.address.city}</Text>
                        <Text>Phone={item.phone}</Text>
                        <Text>Website={item.website}</Text>
                    </View>    
                )}
                ListHeaderComponent = {
                    ()=> (<View><Text style={{fontSize: 21, fontWeight: 'bold'}}>List of Users</Text></View>)
                }

                ListFooterComponent = {
                    ()=> (<View style={{backgroundColor:'#ccc', paddingBottom: 30, paddingTop: 3,alignContent:"flex-start"}}><Text style={{fontSize: 15, fontStyle: "italic"}}>Source: https://jsonplaceholder.typicode.com/users</Text></View>)
                }
                
                keyExtractor = {item => item.id.toString()}
                ItemSeparatorComponent = {
                    //this component will be rendered in between items
                    () => { 
                        return (<View style={{backgroundColor: 'red', height: 6, width: '100%'}}/>)
                    }
                }
            /> 
        </View>
    )
}

Component8ShowUser.defaultProps = {
    users: []
}
export default Component8ShowUser;