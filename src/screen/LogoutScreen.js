import React from 'react';
import {Text,View,Button} from 'react-native' 
import {useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Logout=()=>{

    const dispatch=useDispatch()

    const onLogout=()=>{
        AsyncStorage.removeItem('username')
        .then(()=>{
            dispatch({type:'LOGOUT'})
        })
    }

    return (
        <View style={{
            display:"flex",
            alignItems:'center',
            justifyContent:'center',
            height:'100%'
        }}>
            <Button title='Logout' onPress={onLogout}/>
        </View>
    )
}

export default Logout