import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  containerOut: {
    height: 156,
    padding: 10,
    backgroundColor: '#0a66ad'
  },
  cardBorder : {
    height: 86,
    borderRadius:10,
    marginBottom: 10,
    backgroundColor: '#95C123',
  },
  cardBackground : {
    height: 76,
    margin : 5,
    borderRadius:10,
    flexDirection : 'row',
    backgroundColor: 'white',
  },
  cardTotal : {
    width: 80,
    height: 66,
    margin : 5,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A81AD',
  },
  countTotal : {
    fontSize: 25,
    color: 'white',
  },
  textTotal : {
    fontSize:14,
    color: 'white',
  },
  cardUs : {
    margin: 5,
    width: 125,
    height: 56,
    marginTop : 10,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B8A3E',
  },
  countUs : {
    fontSize: 25,
    color: 'white',
  },
  textUs : {
    fontSize:14,
    color: 'white',
  },
  cardFrance : { 
    margin: 5,
    width: 120,
    height: 56,
    marginTop : 10,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F59F00',
  },
  countFrance : {
    fontSize: 25,
    color: 'white',
  },
  textFrance : {
    fontSize:14,
    color: 'white',
  },
  filterInput : {
    height: 40,
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  }
})

export { styles }

