import React, {useState} from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Platform,  Switch, Slider } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type MuseumItemType = {
    id? : string,
    nameOfArtwork: string,
    synopsis?: string,
    artistName: string,
    artistEmailAddress?: string,
    artistPhoneNumber?: string,
    dateCommissioned?: Date , //possibly unknown
    onDisplay: boolean,
    viewerRating?: number, //possibly N/A
}
type StateVariables = {
    museumItem: MuseumItemType,
    showDatePicker: boolean
}

const Component9: React.FC = ()  => {
    //const [state, setState] = useState(initialState);
    const initialState = {
        museumItem: {
            nameOfArtwork:'',
            artistName:'',
            onDisplay:false
        },
        showDatePicker:false
    }
    const [state, setState] = useState<StateVariables>(initialState);

    /**Let's use date picker as per npm install @react-native-community/datetimepicker  */
    //callback function to set dateCommissioned
    const setDateCommissioned = (_event: any, date: Date | undefined) => {
        const dateCommissioned = date || state.museumItem.dateCommissioned; //if no date is passed with call, use the existing dateCommissioned
        setState({...state, museumItem:{...state.museumItem, dateCommissioned: dateCommissioned}, showDatePicker: Platform.OS === 'ios' ? true : false})//no need to hide if Platform is iOS
    }
   //let us set up the save function that will interact with the strapi at the backend
   const handleCreateItem = async (itemToCreate: MuseumItemType) => {
    //let's try to write to backend
    try {
      const response = await fetch('http://{server-address}:1337/museum-items',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToCreate) // body data type must match "Content-Type" header
      });
      if (!response.ok) throw new Error(response.statusText);//confirm that response is OK, else throw error
      //Response is ok. Proceed!
      const itemCreated: MuseumItemType = await response.json();
      //Here, set state to show that item has been successfully created. Meanwhile, check your strapi
    }catch(error) {
      //Here, set state to show that item creating has failed
      console.log(error)
    }
  }

return (
    <View>
        <Text>Greetings from Component9. Fill the form and submit</Text> 
        <View>
            <Text>Name of Artwork:</Text>
            <TextInput placeholder='Enter name of artwork here'
                onChangeText={(text)=>setState({...state, museumItem:{...state.museumItem, nameOfArtwork:text}})}
                value={state.museumItem.nameOfArtwork}
                autoFocus={true}//focus on this once the screen loads
            />
        </View>
        <View>
            <Text>Name of Artist:</Text>
            <TextInput placeholder='Enter name of artwork here'
                onChangeText={(text)=>setState({...state, museumItem:{...state.museumItem, artistName:text}})}
                value={state.museumItem.artistName}
            />
        </View>
        <View>
            <Text>Synopsis of Artwork:</Text>
            <TextInput placeholder='Enter synopsis of artwork here. Max length is 256 characters'
                onChangeText={(text)=>setState({...state, museumItem:{...state.museumItem, synopsis:text}})}
                multiline
                maxLength={256}
                numberOfLines={6}
                value={state.museumItem.synopsis}
            />
        </View>
        <View>
                <Text>Email Address of Artist:</Text>
                <TextInput placeholder='Enter email address of artist here'
                    onChangeText={(text)=>setState({...state, museumItem:{...state.museumItem, artistEmailAddress:text}})}
                    keyboardType='email-address' //notice the use of email-address keyboard type, here
                    value={state.museumItem.artistEmailAddress}
                />
            </View>
            <View>
                <Text>Date Commissioned:</Text>
                <TouchableWithoutFeedback onPress = {()=>setState({...state, showDatePicker: true})}>
                    <Text>
                        {state.museumItem.dateCommissioned?state.museumItem.dateCommissioned.toLocaleDateString("en-gb"):'--Press here to select date--'} 
                    </Text>
                </TouchableWithoutFeedback>
                {
                    state.showDatePicker && 
                    <DateTimePicker value={state.museumItem.dateCommissioned !== undefined? state.museumItem.dateCommissioned: new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={setDateCommissioned} />
                }
            </View>
            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-start'}}>
                <Text>Artwork on Display?: {state.museumItem.onDisplay? 'Yes (Toggle Switch -->)' : 'No (Toggle Switch -->)'}</Text>
                <Switch onValueChange={(newValue)=>{setState({...state, museumItem:{...state.museumItem, onDisplay: newValue}})}}
                    value={state.museumItem.onDisplay}/>
            </View>
            <View>
                <Text>Viewer Rating: {state.museumItem.viewerRating? state.museumItem.viewerRating : 'No rating yet'}</Text>
                <Slider minimumValue={0} maximumValue={10}
                    onValueChange={(newValue)=>{setState({...state,museumItem: {...state.museumItem, viewerRating: newValue}})}}
                    step={0}/>
            </View>
            <View>
                {/** Let us invoke a send button */}
                <Button
                    title="Save"
                    onPress={() => handleCreateItem(state.museumItem)}
                />
            </View>
        </View>
    )
}

export default Component9;
