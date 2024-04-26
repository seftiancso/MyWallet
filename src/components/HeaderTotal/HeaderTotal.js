import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './HeaderTotal.styles';
import {currencyParser} from '../../utils/currency';
import {countTotal} from '../../utils/helper';

const HeaderTotal = props => {
  const {data, tipe, color} = props;

  return (
    <View style={styles.wrapper(color)}>
      <View>
        <Text style={styles.title}>Pemasukan</Text>
        <Text style={styles.balance}>
          {currencyParser(countTotal(data, tipe))}
        </Text>
      </View>
    </View>
  );
};

export default HeaderTotal;

HeaderTotal.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
};

HeaderTotal.defaultProps = {
  data: [],
  color: 'white',
};
