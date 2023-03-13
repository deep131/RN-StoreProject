import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  DeleteNote,
  EditNote,} from '../NewRedux/ProductSlice';
import {increment, decrement} from '../NewRedux/CalculationSlice';
import {addProducttoCart} from '../NewRedux/MyCartSlice';
import { select } from '../NewRedux/EditSlice';

const Home = () => {
  const count = useSelector(state => state.countTest.coin);
  console.log('count', count);
  const myProduct = useSelector(state => state.product);

  console.log('Added product', myProduct);

  const [isEditMode, setIsEditMode] = useState(false);
  const selectedTodoId = useSelector(state => state.selectedTodo);
  const selectedTodo =
    (selectedTodoId && notes.find(todo => todo.id === selectedTodoId)) || null;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const RenderItem = ({item, index}) => (

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
      {    console.log(index)}
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
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            position: 'absolute',
            left: 122,
            top: 113,
          }}
        >
          {count}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
    
            dispatch(decrement(item.id,index))}
          style={{
            backgroundColor: '#FFC220',
            width: 30,
            height: 30,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            bottom: 50,
            borderRadius: 10,
            left: 20,
            marginTop: 10,
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => dispatch(increment(item.id,index))}
          style={{
            backgroundColor: '#FFC220',
            width: 30,
            height: 30,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            bottom: 50,
            borderRadius: 10,
            left: 20,
            marginTop: 10,
            marginLeft: 20,
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={Remove}
          style={{
            backgroundColor: '#FFC220',
            width: 80,
            height: 30,
            alignItems: 'center',

            justifyContent: 'center',
            bottom: 50,
            borderRadius: 10,
            right: 5,
            marginTop: 10,
          }}
        >
          <Text style={{color: 'white'}}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={edit}
          style={{
            backgroundColor: '#FFC220',
            width: 80,
            height: 30,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            bottom: 50,
            borderRadius: 10,
            left: 20,
            marginTop: 10,
          }}
        >
          <Text style={{color: 'white'}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() =>
          dispatch(addProducttoCart(item), navigation.navigate('MyCart'))
        }
        style={{
          backgroundColor: '#FFC220',
          width: 180,
          height: 30,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          bottom: 50,
          borderRadius: 10,
          left: 60,
          top: 200,
          position: 'absolute',
        }}
      >
        <Text style={{color: 'white'}}>Add toCart</Text>
      </TouchableOpacity>
    </View>
  );
  const Remove = () => {
    console.log(myProduct);
    dispatch(DeleteNote(myProduct));
  };
  const handleSelectTodo = todoId => {
    select({id: todoId});
  };
  const edit = NoteId => {
 
    const handleEdit = () => {
      if (!selectedTodo) return;
      setValues();
    };
    setIsEditMode(true);
    handleEdit();

    handleSelectTodo(NoteId);
    navigation.navigate('AddProduct');
  };


  return (
    <View style={{paddingTop: 30, backgroundColor: 'white', paddingBottom: 40}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddProduct')}
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
            paddingBottom: 50,
            width: 300,
          }}
        >
          {myProduct <= 0 ? (
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 24,
                color: '#0071DC',
                fontWeight: '500',
                marginTop: 250,
              }}
            >
              No Products Available
            </Text>
          ) : null}
          <FlatList
            data={myProduct}
            renderItem={RenderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingRight: 10, paddingBottom: 20}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
