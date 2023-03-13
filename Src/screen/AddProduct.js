import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  Image,
  Platform,
  PermissionsAndroid,
  AsyncStorage,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProduct,
  EditNote as editTodoActionCreator,
  selectTodoActionCreator,
} from '../NewRedux/ProductSlice';
import {select} from '../NewRedux/EditSlice';
const AddProduct = () => {
  const dispach = useDispatch();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [Arrayany, setany] = useState([]);
  const [note, setNote] = useState({
    title: '',
    des: '',
    price: '',
    rating: '',
  });
  const selectedTodoId = useSelector(state => state.selectedTodo);
  const [isEditMode, setIsEditMode] = useState(false);
  const [uniqueId, setUniqueID] = useState(1);
  const handleCancelUpdate = e => {
    setIsEditMode(false);
    setNote({
      title: '',
      des: '',
      price: '',
      rating: '',
    });
  };
  const navigation = useNavigation();

  useEffect(() => {
    const a = AsyncStorage.getItem('id1').then(res => {
      console.log('res==', res);
    });
  }, []);

  const [ImageSelected, setImageSelected] = useState('');
  const [uploadedImage, setUploadImage] = useState([]);
  const submit = () => {
    if (input1 === '') {
      Snackbar.show({
        text: 'Please Enter Title of Product',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
    } else if (input2 === '') {
      Snackbar.show({
        text: 'Please Enter Description of Product',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
    } else if (input3 === '') {
      Snackbar.show({
        text: 'Please Enter Price Of Product',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
    } else if (input4 === '') {
      Snackbar.show({
        text: 'Please Enter RatingNumber',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
    } else {
      let id1 = Math.floor(Math.random() * 90 + 10);
      console.log('id1 == ', id1);
      const object = {
        id: id1,
        title: input1,
        des: input2,
        price: input3,
        rating: input4,
        image: ImageSelected,
      };

      Arrayany.push(object);
      dispach(addProduct(object));

      Alert.alert('Add Item ?', '', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Home')},
      ]);
    }
  };

  const OPENPICKER = () => {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      // Same code as in above section!
      console.log('response', response);
      if (response.didCancel != true) {
        setUploadImage(response?.assets[0]);
        setImageSelected(response?.assets[0].uri);
      }
    });
  };
  const OpenCamera = () => {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      // Same code as in above section!
      console.log('response', response);
      if (response.didCancel != true) {
        setUploadImage(response?.assets[0]);
        setImageSelected(response?.assets[0].uri);
      }
    });
  };
  const handleUpdate = e => {
    console.log('edited', note);
    e.preventDefault();
    navigation.navigate('Home');
    if (!selectedTodoId) {
      handleCancelUpdate();
      return;
    }

    // dispatch(
    //   select({
    //     id: selectedTodoId,
    //     title: note.title,
    //     des: note.des,
    //     price: note.price,
    //     rating: note.rating,
    //   }),
    // );
    setIsEditMode(false);
    setNote({
      title: '',
      des: '',
      price: '',
      rating: '',
    });
  };

  return (
    <View style={{backgroundColor: 'white', paddingBottom: 120}}>
      <View
        style={{
          backgroundColor: '#E6F1FC',
          width: 300,
          height: 600,
          borderRadius: 16,
          alignSelf: 'center',
          marginTop: 80,
        }}
      >
        <View
          style={{marginTop: 2, alignSelf: 'center', justifyContent: 'center'}}
        >
          <TextInput
            onChangeText={text => setInput1(text)}
            value={input1}
            style={styles.input}
            placeholder="ProductTitle"
          ></TextInput>
          <TextInput
            onChangeText={text => setInput2(text)}
            style={styles.input}
            placeholder="Description"
            value={input2}
          ></TextInput>
          <TextInput
            onChangeText={text => setInput3(text)}
            value={input3}
            style={styles.input}
            placeholder="Price"
            keyboardType="numeric"
          ></TextInput>
          <TextInput
            onChangeText={text => setInput4(text)}
            value={input4}
            style={styles.input}
            placeholder="Rating in Number"
            keyboardType="numeric"
          ></TextInput>

          <View style={styles.container}>
            <Image source={{uri: ImageSelected}} style={styles.imageStyle} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={() => OPENPICKER()}
              >
                <Text style={styles.textStyle}>Open Images</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={() => OpenCamera()}
              >
                <Text style={styles.textStyle}>Open Camera</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={submit} style={styles.button}>
            <Text style={{fontWeight: '600', color: 'white', fontSize: 18}}>
              Submit Product
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUpdate} style={styles.buttonStyle}>
            <Text style={{fontWeight: '600', color: 'white', fontSize: 18}}>
              update
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 250,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    width: 240,
    backgroundColor: '#FFC220',
    alignSelf: 'center',
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    paddingBottom: 4,
  },
  container: {
    padding: 10,

    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonStyle: {
    backgroundColor: '#FFC220',

    borderRadius: 16,
    marginVertical: 10,
    marginLeft: 10,
    width: 100,
    right: 5,
  },
  imageStyle: {
    width: 180,
    height: 120,
    margin: 5,
    borderRadius: 24,
  },
});

export default AddProduct;
