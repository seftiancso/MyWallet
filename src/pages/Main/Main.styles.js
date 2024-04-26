import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  income: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'green',
    padding: 14,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  outcome: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'red',
    padding: 14,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  balance: {
    fontSize: 16,
    color: 'white',
  },
  content: {
    padding: 14,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
  cardBalance: tipe => ({
    fontSize: 16,
    color: tipe === 'pemasukan' ? 'green' : 'red',
  }),
  cardAction: color => ({
    fontSize: 16,
    color: color,
    marginBottom: 4,
  }),
});

export default styles;
