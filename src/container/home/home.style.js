import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerOut: {
    height:'100%',
    backgroundColor: '#EFFBFF'
  },
  containerRenderItem : {
    width:180,
    height: 110,
    elevation:5,
    padding: 10,
    margin : 10,
    borderWidth: 1,
    marginBottom:0,
    borderRadius: 6,
    borderColor : '#EDEDED',
    backgroundColor: 'white',
  },
  containerRenderItemExpan : {
    width:180,
    elevation:5,
    padding: 10,
    margin : 10,
    marginBottom:0,
    borderWidth: 1,
    height: '100%',
    borderRadius: 6,
    borderColor : '#EDEDED',
    backgroundColor: 'white',
  },
  containerRenderBottom : {
    width:180,
    margin : 10,
    height: 110,
    elevation:5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor : '#EDEDED',
    backgroundColor: 'white',
  },
  photoCard : {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#EDEDED',
  },
  cardName : {
    width: 150,
    height: 20,
    marginTop: 5,
    padding : 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B8A3E',
  },
  textName : {
    fontSize:12,
    color: 'white'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  indicatorContainer : {
    top: 6,
    bottom : 10,
    marginBottom : 10,
    alignItems:'center',
  },
  containerScrollView: {
    width:'100%',
  },
})

export { styles }

