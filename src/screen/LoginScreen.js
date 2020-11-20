import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { 
    Keyboard,
    TouchableWithoutFeedback,
    View,
    Text,
} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements'
import { useSelector,useDispatch } from 'react-redux';

const Login=()=>{

    const [username,setUsername]=useState('')

    const Auth=useSelector(state=>state.Auth)
    const dispatch=useDispatch()

    const inputUsername=(text)=>{
        if(text)setUsername(text)
    }

    const onLogin=async()=>{
        try{
            await AsyncStorage.setItem('username',username)
            dispatch({type:'LOGIN',payload:username})
        }catch(err){
            console.log(err)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={{
                display:'flex',
                height:'100%',
                alignItems:'center',
                marginTop:200
            }}>
                <View>
                    <Text style={{
                        color:'tomato',
                        fontSize:36,
                        fontWeight:'bold'
                    }}>
                        TomatoApp
                    </Text>
                    <Icon
                        type='Ionicons'
                        color='tomato'
                        name='restaurant'
                        size={72}
                    />
                </View>
                <View style={{
                    width:'80%',
                }}>
                    <Input
                        placeholder={'Username'}
                        value={username}
                        onChangeText={inputUsername}
                    />
                    <Button
                        title='Login'
                        buttonStyle={{
                            marginTop:12,
                            backgroundColor:'tomato',
                            color:'white'
                        }}
                        onPress={()=>onLogin()}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login