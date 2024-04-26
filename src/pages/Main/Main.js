import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './Main.styles';
import {currencyParser} from '../../utils/currency';
import {useNavigation} from '@react-navigation/native';
import {ActionTypes} from '../../redux/constants/action-types';
import HeaderTotal from '../../components';

const Main = () => {
  const navigation = useNavigation();

  // Redux
  const mainData = useSelector(state => state.mainData);
  const dispatch = useDispatch();

  // State
  const [listData, setListData] = useState([]);

  const deleteData = (data, id) => {
    const newData = data.filter(item => item.id !== id);
    dispatch({
      type: ActionTypes.EDIT_MAIN_DATA,
      payload: newData,
    });
    setListData(newData);
  };

  useEffect(() => {
    if (mainData.listData.length !== 0) {
      setListData(mainData.listData);
    }
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        {listData.length !== 0 && (
          <React.Fragment>
            <HeaderTotal data={listData} tipe="pemasukan" color="green" />
            <HeaderTotal data={listData} tipe="pengeluaran" color="red" />
          </React.Fragment>
        )}
      </View>
      <View>
        <Button
          title="TAMBAH DATA"
          onPress={() =>
            navigation.navigate('Edit', {
              type: 'add',
            })
          }
        />
      </View>
      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          data={listData}
          renderItem={({item}) => {
            const {id, title, tipe, nominal} = item;
            return (
              <View style={styles.card}>
                <View style={{flex: 1}}>
                  <Text style={styles.cardTitle}>{title}</Text>
                  <Text style={styles.cardBalance(tipe)}>{`${
                    tipe === 'pemasukan' ? '+' : '-'
                  } ${currencyParser(nominal)}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.cardAction('green')}
                    onPress={() =>
                      navigation.navigate('Edit', {
                        type: 'edit',
                        data: item,
                      })
                    }>
                    Edit
                  </Text>
                  <Text
                    style={styles.cardAction('red')}
                    onPress={() => deleteData(mainData.listData, id)}>
                    Delete
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Main;
