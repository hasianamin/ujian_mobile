import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Detail from './../screen/DetailScreen'
import TabRoot from './TabRoot';

const Stack=createStackNavigator()

const DetailStack=()=>{
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='tab' component={TabRoot}/>
            <Stack.Screen name='detail' component={Detail}/>
        </Stack.Navigator>
    )
}

export default DetailStack