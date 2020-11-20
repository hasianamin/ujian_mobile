import React, { useState,useEffect } from 'react';
import {Text,View,ImageBackground,Image} from 'react-native' 
import { useSelector } from 'react-redux';
import {Icon} from 'react-native-elements'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Axios from 'axios'
const Home=({navigation})=>{

    const Auth=useSelector(state=>state.Auth)
    const [dataRestaurant,setDataRestaurant]=useState(null)

    useEffect(()=>{
        Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
            headers: {"user-key": "29b880a1a71f3e32618853274cbce741"}
        }).then((res)=>{
            setDataRestaurant(res.data.restaurants)
            console.log(res.data.restaurants)
        })
    },[])

    const RenderProduct=()=>{
        return dataRestaurant.map((val,index)=>{
            return (
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('detail',{restaurant_id:index})}>
                    <View style={{
                        display:"flex",
                        flexDirection:'column',
                        alignItems:'center',
                        flexBasis:'40%'
                    }}>
                        {
                            val.restaurant.featured_image===""?
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
                                uri: val.restaurant.featured_image
                                }}
                                style={{height:200, width:150, backgroundColor:'white'}}
                            />
                        }
                        <View style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                        <Icon
                            type='FontAwesome'
                            color='tomato'
                            name='star'
                        />
                        <Text>{val.restaurant.user_rating.aggregate_rating}</Text>
                        </View>
                        <Text>{val.restaurant.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    if(dataRestaurant===null){
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
            <View style={{
                backgroundColor:'tomato',
                paddingVertical:18,
                paddingHorizontal:16,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                <Icon
                    type='Ionicons'
                    color='white'
                    name='restaurant'
                    size={24}
                />
                <Text style={{
                    color:'white',
                    fontSize:18
                }}>Hello, {Auth.username}</Text>  
            </View>
            <ScrollView>
                <View style={{
                    display:'flex',
                    alignItems:'center',
                    marginTop:8,
                    paddingHorizontal:'10%',
                    paddingVertical:18,
                    flexWrap:'wrap',
                    flexDirection:'row',
                    justifyContent:'center'
                }}>
                    <View style={{
                        marginHorizontal:8,
                        marginVertical:6,
                        display:'flex',
                        flexBasis:'18%',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderColor:'tomato',
                            borderWidth:2,
                            paddingVertical:6,
                            paddingHorizontal:6,
                            borderRadius:50
                        }}>
                            <Icon
                                type='FontAwesome'
                                color='tomato'
                                name='credit-card'
                                size={32}
                            />
                        </View>
                        <Text>Credit</Text>
                    </View>
                    <View style={{
                        marginHorizontal:8,
                        marginVertical:6,
                        display:'flex',
                        flexBasis:'18%',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderColor:'tomato',
                            borderWidth:2,
                            paddingVertical:6,
                            paddingHorizontal:6,
                            borderRadius:50
                        }}>
                            <Icon
                                type='FontAwesome'
                                color='tomato'
                                name='credit-card'
                                size={32}
                            />
                        </View>
                        <Text>Variant</Text>
                    </View>
                    <View style={{
                        marginHorizontal:8,
                        marginVertical:6,
                        display:'flex',
                        flexBasis:'18%',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderColor:'tomato',
                            borderWidth:2,
                            paddingVertical:6,
                            paddingHorizontal:6,
                            borderRadius:50
                        }}>
                            <Icon
                                type='FontAwesome'
                                color='tomato'
                                name='credit-card'
                                size={32}
                            />
                        </View>
                        <Text>Recipe</Text>
                    </View>
                    <View style={{
                        marginHorizontal:8,
                        marginVertical:6,
                        display:'flex',
                        flexBasis:'18%',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderColor:'tomato',
                            borderWidth:2,
                            paddingVertical:6,
                            paddingHorizontal:6,
                            borderRadius:50
                        }}>
                            <Icon
                                type='FontAwesome'
                                color='tomato'
                                name='credit-card'
                                size={32}
                            />
                        </View>
                        <Text>Location</Text>
                    </View>
                    <View style={{
                        marginHorizontal:8,
                        marginVertical:6,
                        display:'flex',
                        flexBasis:'18%',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderColor:'tomato',
                            borderWidth:2,
                            paddingVertical:6,
                            paddingHorizontal:6,
                            borderRadius:50
                        }}>
                            <Icon
                                type='FontAwesome'
                                color='tomato'
                                name='credit-card'
                                size={32}
                            />
                        </View>
                        <Text>Cart</Text>
                    </View>
                    <View style={{
                        marginHorizontal:8,
                        marginVertical:6,
                        display:'flex',
                        flexBasis:'18%',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderColor:'tomato',
                            borderWidth:2,
                            paddingVertical:6,
                            paddingHorizontal:6,
                            borderRadius:50
                        }}>
                            <Icon
                                type='FontAwesome'
                                color='tomato'
                                name='credit-card'
                                size={32}
                            />
                        </View>
                        <Text>Pizza</Text>
                    </View>
                    <View style={{
                        marginHorizontal:8,
                        marginVertical:6,
                        display:'flex',
                        flexBasis:'18%',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderColor:'tomato',
                            borderWidth:2,
                            paddingVertical:6,
                            paddingHorizontal:6,
                            borderRadius:50
                        }}>
                            <Icon
                                type='FontAwesome'
                                color='tomato'
                                name='credit-card'
                                size={32}
                            />
                        </View>
                        <Text>Burger</Text>
                    </View>
                    <View style={{
                        marginHorizontal:8,
                        marginVertical:6,
                        display:'flex',
                        flexBasis:'18%',
                        alignItems:'center',
                    }}>
                        <View style={{
                            borderColor:'tomato',
                            borderWidth:2,
                            paddingVertical:6,
                            paddingHorizontal:6,
                            borderRadius:50
                        }}>
                            <Icon
                                type='FontAwesome'
                                color='tomato'
                                name='credit-card'
                                size={32}
                            />
                        </View>
                        <Text>More</Text>
                    </View>                    
                </View>
                <View style={{
                    backgroundColor:'whitesmoke',
                    paddingHorizontal:12,
                    paddingVertical:10,
                    display:'flex',
                }}>
                    <View style={{
                        display:'flex',
                        flexWrap:'wrap',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-around'
                    }}>
                        {RenderProduct()}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home