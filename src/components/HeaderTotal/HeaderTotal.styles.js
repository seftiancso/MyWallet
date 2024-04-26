import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: color => ({
    flexDirection: 'row',
    flex: 1,
    backgroundColor: color,
    padding: 14,
    justifyContent: 'flex-start',
    alignContent: 'center',
  }),
  title: {
    fontSize: 16,
    color: 'white',
  },
  balance: {
    fontSize: 16,
    color: 'white',
  },
});

export default styles;
