import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import AuthStackRoot from './src/navigation/AuthStackRoot';
import TabRoot from './src/navigation/TabRoot';
import Splash from './src/screen/SplashScreen';
import DetailStack from './src/navigation/DetailStack'
const AppMain=()=>{

    const Auth=useSelector(state=>state.Auth)
    const dispatch=useDispatch()
    const [isLoading,setIsLoading]=useState(true)


    useEffect(()=>{
        AsyncStorage.getItem('username')
        .then((value)=>{
            if(value!==null){
                dispatch({type:'LOGIN',payload:value})
                setIsLoading(false)
            }
        }).catch((err)=>console.log(err))
        .finally(()=>setIsLoading(false))
    },[])

    if(isLoading){
        return(
            <Splash/>
        )
    }

    return (
        <NavigationContainer>
            {
                Auth.isLogin?
                <DetailStack/>
                :
                <AuthStackRoot/>
            }
        </NavigationContainer>
    )
}

const styles=StyleSheet.create({
    boxSize:{
        flex:1
    },
    boxColor:{
        backgroundColor:'blue'
    },
    boxColor2:{
        backgroundColor:'red'
    },
    centerItem:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default AppMain