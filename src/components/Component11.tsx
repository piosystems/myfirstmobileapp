/** Here we illustrate useEffect and fetching remote data */
import React, {useState} from 'react';
import {Button, ThemeProvider, Input, Text} from 'react-native-elements';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Component11: React.FC = ()  => {

    const [token, setToken] = useState<string | null>(null);
    const [content, setContent] = useState<string>('');
    const [credentials, setCredentials] = useState<{username:string | null, password:string | null}>({username: null, password:null});


    const fetchToken = async (url: string, username: string, password: string, service: string) =>{
        try {
            const fullGetURL = `${url}?username=${username}&password=${password}&service=${service}`
            let response = await fetch(fullGetURL,
            {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                /*
                body: JSON.stringify(
                    {
                        username: username,
                        password: password,
                        service: service

                    }
                ) // body data type must match "Content-Type" header
                */
                
            });
            const tokenObjectWrap = await response.json();
            //console.log(tokenObjectWrap.token)
            setToken(tokenObjectWrap.token);
        } catch (error) {
            console.log(error.message)
            setToken(null);
        }
    };

    const fetchContent = async (url: string, wstoken: string, moodlewsrestformat: string, wsfunction: string) =>{
        try {
            const fullGetURL = `${url}?wstoken=${wstoken}&moodlewsrestformat=${moodlewsrestformat}&wsfunction=${wsfunction}`
            let response = await fetch(fullGetURL,
            {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                /*
                body: JSON.stringify(
                    {
                        wstoken: wstoken,
                        moodlewsrestformat: moodlewsrestformat,
                        wsfunction: wsfunction

                    }
                ) // body data type must match "Content-Type" header
                */
            });
            //console.log(response.toString);
            const content = await response.json();
            console.log(content);
            setContent(JSON.stringify(content)); 
        } catch (error) {
            console.log(error.message)
            setContent('');
        }
    };


    return (
        <ThemeProvider>

            <ScrollView>

                <Input placeholder='Username'
                    leftIcon={<Icon name='user' size={24} color='black'/>}
                    onChangeText = {(text) => {setCredentials({...credentials, username: text})}}
                    autoFocus
                />

                <Input placeholder='Password' secureTextEntry={true}
                    leftIcon={<Icon name='lock' size={24} color='black'/>}
                    onChangeText = {(text) => {setCredentials({...credentials, password: text})}}
                />

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <Button title="Get Token" buttonStyle={{padding: 6, margin: 3}} onPress={()=>{
                        if(credentials.username != null && credentials.password!= null){
                            //console.log(credentials.username + ' ' + credentials.password)
                            fetchToken(
                                'https://elearning.pau.edu.ng/login/token.php', 
                                credentials.username,
                                credentials.password, 
                                'Moodle_test_app'
                            )
                        }
                    }}/>
                    <Button title="Get Content" buttonStyle={{padding: 6, margin: 3}} disabled={token==null?true: false}
                        onPress = {() => {
                            if (token != null){
                                //console.log(token)
                                fetchContent(
                                    'https://elearning.pau.edu.ng/webservice/rest/server.php',
                                    token,
                                    'json',
                                    'core_webservice_get_site_info'
                                );
                            }
                        }}
                    /> 
                </View>

                <Text style={{padding: 9}}>
                    {content}
                </Text>

            </ScrollView>

        </ThemeProvider>
    )

}

export default Component11;
