import React from "react";
import { View ,TouchableOpacity,Text,ScrollView,FlatList,Image} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { addProducttoCart } from '../NewRedux/MyCartSlice';
const MyCart=()=>{
    const dispatch = useDispatch();
    const myCartProduct = useSelector(state => state.products);
    console.log('Added product', myCartProduct);
  const navigation = useNavigation();
    const RenderItem = ({item}) => (
        <View
          style={{
            marginLeft: 10,
            marginTop: 30,
            backgroundColor: 'white',
            elevation: 10,
            borderRadius: 12,
            height: 250,
            alignItems: 'center',
            paddingBottom: 20,
          }}
        >
          <View
            style={{marginLeft: 30, width: 250, height: 150, flexDirection: 'row'}}
          >
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                Title:{item.title}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                Description :{item.des}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                Price:{item.price}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                Rating:{item.rating}
              </Text>
            </View>
            <Image
              style={{
                height: 80,
                width: 80,
                alignSelf: 'center',
                borderRadius: 50,
                left: 160,
                top: 10,
                position: 'absolute',
              }}
              source={{uri: item.image}}
            ></Image>
    
          </View>
    
         
  
        </View>
      )

        
    return(
        <View style={{paddingTop: 30, backgroundColor: 'white', paddingBottom: 40}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            width: 240,
            backgroundColor: '#FFC220',
            alignSelf: 'center',
            height: 50,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
          }}
        >
          <Text style={{fontWeight: '600', color: 'white', fontSize: 18}}>
            Add Product
          </Text>
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            backgroundColor: 'white',
            backgroundColor: 'white',
            width: 300,
            height: 600,
            alignSelf: 'center',
            marginTop: 30,
            marginLeft: 30,
          }}
          horizontal={true}
        >
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#E6F1FC',
              borderRadius: 16,
              paddingBottom: 50,width:300
            }}
          >
 
      
            <FlatList
              data={myCartProduct}
              renderItem={RenderItem}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              contentContainerStyle={{paddingRight: 10, paddingBottom: 20}}
            />
          </View>
        </ScrollView>
      </View> 
    )


}
export default MyCart