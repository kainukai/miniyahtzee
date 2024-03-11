import { StyleSheet } from 'react-native';
import Metrics from "../style/Metrics";
import { Font } from 'expo-font';


export default StyleSheet.create({
  container: {
    fontFamily: "comic-sans",
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: 'red',
    flexDirection: 'row',
    fontFamily: "comic-sans",
  },

  footer: {
    marginTop: 25,
    backgroundColor: 'red',
    flexDirection: 'row',
    fontFamily: "comic-sans",
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
    fontFamily: "comic-sans",
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    fontFamily: "comic-sans",
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "comic-sans",
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 10,
    margin: 15,
    fontFamily: "comic-sans",
    
  },

  gamerule: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 10,
    margin: 10,
    fontFamily: "comic-sans",
  },

  gametext: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    margin: 15,
    fontFamily: "comic-sans",
  },

  gametotal: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 10,
    margin: 15,
    fontFamily: "comic-sans",
  },

  gamebonus: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 10,
    margin: 25,
    fontFamily: "comic-sans",
  },

  playerName: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    margin: 0,
    fontFamily: "comic-sans",
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
    fontFamily: "comic-sans",
    
    
  },
  buttonText: {
    color:"white",
    fontSize: 20,
    fontFamily: "comic-sans",
  },
  information:{
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    fontFamily: "comic-sans",
  }
});