import { StyleSheet } from 'react-native';
import Metrics from "../style/Metrics";
import { Font } from 'expo-font';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: 'red',
    flexDirection: 'row',

  },

  footer: {
    marginTop: 25,
    backgroundColor: 'red',
    flexDirection: 'row',
 
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,

  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 10,
    margin: 5,

    
  },

  gamerule: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 0,
    margin: 10,

  },

  gametext: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    margin: 15,

  },

  gametotal: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 10,
    margin: 15,
   
  },

  gamebonus: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 10,
    margin: 25,
   
  },

  playerName: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    margin: 0,
    
  },

  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "red",
    width: 330,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  buttonText: {
    color:"white",
    fontSize: 20,
    
  },
  information:{
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    
  }
});