import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './Edit.styles';
import {ActionTypes} from '../../redux/constants/action-types';
import {Dropdown} from 'react-native-element-dropdown';

const Edit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {type, data} = route.params;

  // Redux
  const mainData = useSelector(state => state.mainData);
  const dispatch = useDispatch();

  // State
  const [title, setTitle] = useState('');
  const [balance, setBalance] = useState(0);
  const [tipe, setTipe] = useState('');

  const dataDropdown = [
    {label: 'PEMASUKAN', value: 'pemasukan'},
    {label: 'PENGELUARAN', value: 'pengeluaran'},
  ];

  const moveBack = () => {
    navigation.goBack();
  };

  const saveData = () => {
    if (type === 'add') {
      dispatch({
        type: ActionTypes.ADD_MAIN_DATA,
        payload: {
          id: mainData.listData.length,
          title: title,
          tipe: tipe,
          nominal: balance,
        },
      });
    } else {
      let tempData = mainData.listData;
      const newData = {id: data.id, title: title, tipe: tipe, nominal: balance};
      const updatedArr = tempData.map(item => {
        if (item.id === newData.id) {
          return newData;
        } else {
          return item;
        }
      });
      dispatch({
        type: ActionTypes.EDIT_MAIN_DATA,
        payload: updatedArr,
      });
    }
    setTimeout(() => {
      navigation.replace('Main');
    }, 1000);
  };

  useEffect(() => {
    if (type === 'edit') {
      setTitle(data.title), setTipe(data.tipe), setBalance(data.nominal);
    }
  }, []);

  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={moveBack}>
        <Text style={styles.backText}>Kembali</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="masukan judul pembukuan"
      />
      <TextInput
        style={styles.input}
        value={balance}
        onChangeText={setBalance}
        placeholder="masukan nominal"
        keyboardType="number-pad"
      />
      <Dropdown
        style={styles.dropdown}
        data={dataDropdown}
        placeholder="pilih tipe pembukuan"
        labelField="label"
        valueField="value"
        value={tipe}
        onChange={item => {
          setTipe(item.value);
        }}
      />
      <Button
        disabled={title === '' && balance === 0 && tipe === ''}
        title={`${type === 'add' ? 'TAMBAH DATA' : 'SIMPAN DATA'}`}
        onPress={saveData}
      />
    </View>
  );
};

export default Edit;
