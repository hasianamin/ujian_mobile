import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './../screen/HomeScreen'
import Logout from './../screen/LogoutScreen'
import {Icon} from 'native-base'


const Tab=createBottomTabNavigator()

const TabRoot=()=>{
    return (
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,color})=>{
                let iconName, type
                if(route.name==='Home'){
                    iconName='home'
                    type='FontAwesome5'
                } else{
                    iconName='user'
                    type='FontAwesome5'
                }
                return <Icon name={iconName} type={type} style={{fontSize:20,color}}  />;
            },
            tabBarLabel:()=>{
                return null
            }
        })}

        tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'gray'
        }}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Logout' component={Logout}/>
        </Tab.Navigator>
    )
}

export default TabRoot