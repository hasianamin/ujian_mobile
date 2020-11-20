import React from 'react';
import {Text,View} from 'react-native' 
import {Icon} from 'react-native-elements'

const Splash=()=>{
    return (
        <View style={{
            display:'flex',
            height:'100%',
            alignItems:'center',
            marginTop:200,
            backgroundColor:'tomato'
        }}>
            <View>
                <Text style={{
                    color:'white',
                    fontSize:36,
                    fontWeight:'bold'
                }}>
                    TomatoApp
                </Text>
                <Icon
                    type='Ionicons'
                    color='white'
                    name='restaurant'
                    size={72}
                />
            </View>
        </View>
    )
}

export default Splash