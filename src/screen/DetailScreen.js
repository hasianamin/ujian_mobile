import React,{useEffect,useState} from 'react';
import {Text,View,Image} from 'react-native' 
import {Icon} from 'react-native-elements'
import Axios from 'axios'
import {TouchableWithoutFeedback} from 'react-native-gesture-handler'


const Detail=({route,navigation})=>{
    const {restaurant_id}=route.params
    const [data,setData]=useState(null)

    if(restaurant_id===null){
        restaurant_id=0
    }

    useEffect(()=>{
        Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
            headers: {"user-key": "29b880a1a71f3e32618853274cbce741"}
        }).then((res)=>{
            setData(res.data.restaurants)
        })
    },[])

    if(data===null){
        return (
            <View>
                <Text>
                    Loading
                </Text>
            </View>
        )
    }
    
    return (
        <View>
            <View>
                <TouchableWithoutFeedback 
                style={{
                    backgroundColor:'tomato',
                    paddingVertical:18,
                    paddingHorizontal:16,
                    display:'flex',
                    flexDirection:'row'
                }}
                onPress={()=>navigation.navigate('tab')}>
                    <Icon
                        type='Ionicons'
                        color='white'
                        name='arrow-back'
                        size={24}
                    />
                    <Text style={{
                        color:'white',
                        fontSize:18,
                        marginLeft:10
                    }}>{data[restaurant_id].restaurant.name}</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={{
                display:'flex',
                alignItems:'center',
                marginTop:10
            }}>
                {
                    data[restaurant_id].restaurant.featured_image===""?
                    <Image
                        //from internet
                        source={{
                        uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636'
                        }}
                        style={{height:200, width:150, backgroundColor:'white'}}
                    />:
                    <Image
                        //from internet
                        source={{
                        uri: data[restaurant_id].restaurant.featured_image
                        }}
                        style={{height:200, width:150, backgroundColor:'white'}}
                    />
                }
            </View>  
            <View>
                <Text style={{fontSize:18,marginLeft:18,marginTop:10}}>Rating : {data[restaurant_id].restaurant.user_rating.aggregate_rating}</Text>
                <Text style={{fontSize:18,marginLeft:18,marginTop:10}}>Address : {data[restaurant_id].restaurant.location.address}</Text>
                <Text style={{fontSize:18,marginLeft:18,marginTop:10}}>Cuisines : {data[restaurant_id].restaurant.cuisines}</Text>
                <Text style={{fontSize:18,marginLeft:18,marginTop:10}}>Open : {data[restaurant_id].restaurant.timings}</Text>
                <Text style={{fontSize:18,marginLeft:18,marginTop:10}}>Cost for 2 : {data[restaurant_id].restaurant.user_rating.aggregate_rating}</Text>
            </View>
        </View>
    )
}

export default Detail