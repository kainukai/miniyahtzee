import { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { 
  NBR_OF_DICES,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS_LIMIT,
  BONUS_POINTS } from '../constants/Game';
import { Container, Row, Col } from 'react-native-flex-grid';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from '../style/style';
import { FontAwesome5 } from '@expo/vector-icons';

let board = [];

export default function Gameboard({ navigation, route }) {

  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState("Throw Dices.");
  const [gameEndStatus, setGameEndStatus] = useState(false);
  const [showDiceIcon, setShowDiceIcon] = useState(true);

  // If dices are selected or not
  const [selectedDices, setSelectedDices] =
    useState(new Array(NBR_OF_DICES).fill(false));
  // Dice spots
  const [diceSpots, setDiceSpots] =
    useState(new Array(NBR_OF_DICES).fill(0));

  // If dice points are selected or not for spots
  const [selectedDicePoints, setSelectedDicePoints] =
    useState(new Array(MAX_SPOT).fill(false));
  // Total points for differents spots
  const [dicePointsTotal, setDicePointsTotal] =
    useState(new Array(MAX_SPOT).fill(0));

  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    if (playerName === "" && route.params?.player) {
      setPlayerName(route.params.player);
    }
  }, [])

  const row = [];
  for (let dice = 0; dice < NBR_OF_DICES; dice++) {
    row.push(
      <Col key={"dice" + dice}>
        <Pressable 
            key={"dice" + dice}
            onPress={() => selectDice(dice)}
            >
          <MaterialCommunityIcons
            name={board[dice]}
            key={"dice" + dice}
            size={50} 
            color={getDiceColor(dice)}
            >
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    );
  }

  const pointsRow = [];
  for (let spot = 0; spot < MAX_SPOT; spot++) {
    pointsRow.push(
      <Col key={"pointsRow" + spot} style={{ paddingHorizontal: 25 }}>
        <Text key={"pointsRowText" + spot}>{getSpotTotal(spot)}</Text>
      </Col>
    );
  }  

  const pointsToSelectRow = [];
  for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
      pointsToSelectRow.push(
      <Col key={"buttonsRow" + diceButton}>
        <Pressable 
          key={"buttonsRow" + diceButton}
          onPress={() => selectDicePoints(diceButton)}
          >
          <MaterialCommunityIcons 
            key={"buttonsRow" + diceButton}
            name={"numeric-" + (diceButton + 1) + "-circle"}
            size={35}
            color={getDicePointsColor(diceButton)}
            >          
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
      );
  }

  const selectDice = (i) => {
    let dices = [...selectedDices];
    dices[i] = !selectedDices[i]; // Toggle the selected status of the dice
    setSelectedDices(dices);
    if (dices.every(x => x)) {

    }
  }

  function getDiceColor(i) {
    return selectedDices[i] ? "red" : "black"
  }

  function getDicePointsColor(i) {
    return selectedDicePoints[i] ? "red" : "black"
  }

  const selectDicePoints = (i) => {
    if (nbrOfThrowsLeft === 0) {
      let selectedPoints = [...selectedDicePoints];
      let points = [...dicePointsTotal];
      
      if (!selectedPoints[i]) {
        selectedPoints[i] = true;
        let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1 : total), 0);
        points[i] = nbrOfDices * (i + 1);
        setDicePointsTotal(points);
        setSelectedDicePoints(selectedPoints);
        
        // Check if all points have been selected
        if (selectedPoints.every(x => x)) {
          setGameEndStatus(true);
          setStatus("Game over. All points selected.");
          
        }
        
        setNbrOfThrowsLeft(NBR_OF_THROWS);
        return points[i];
      } else {
        setStatus("You already selected points for " + (i + 1));
      } 
    } else {
      setStatus("Throw " + NBR_OF_THROWS + " times before setting points.");
    }
  }


  const throwDices = () => {
    if (gameEndStatus) {
      // Reset game states if the game has ended
      setGameEndStatus(false);
      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
      setDiceSpots(new Array(NBR_OF_DICES).fill(0));
      setSelectedDicePoints(new Array(MAX_SPOT).fill(false));
      setDicePointsTotal(new Array(MAX_SPOT).fill(0));
      setStatus("Throw Dices.");
      board = [];
      setNbrOfThrowsLeft(NBR_OF_THROWS); // Reset throws left
      setShowDiceIcon(true); // Show the dice icon again
    } else {
      if (nbrOfThrowsLeft > 0) { // Check if throws left is greater than 0
        setShowDiceIcon(false); // Hide the dice icon
        let spots = [...diceSpots];
        for (let i = 0; i < NBR_OF_DICES; i++) {
          if (!selectedDices[i]) {
            let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
            spots[i] = randomNumber;
            board[i] = 'dice-' + randomNumber;
          }
        }
        setDiceSpots(spots);
        setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
      }
    }
  };

  function getSpotTotal(i) {
    return dicePointsTotal[i];
  }


  return (
    <>
      <Header />
      <View>
        <Container>
          <Row style={styles.row}>{row}</Row>
        </Container>
        {showDiceIcon && ( // Conditionally render the FontAwesome5 icon based on the state
          <FontAwesome5
            name="dice"
            size={90}
            color="red"
            style={styles.information}
          />
        )}
      <Text style={styles.gametext}>Throws left: {nbrOfThrowsLeft}</Text>
      <Text style={styles.gametext}>{status}</Text>

      <Pressable style={styles.button}
        onPress={() => throwDices()}>
        <Text style={styles.buttonText}>THROW DICES</Text>
      </Pressable>

      <Text style={styles.gametotal}> Total: {dicePointsTotal.reduce((acc, curr) => acc + curr, 0)} </Text>

      <Container>
        <Row>{pointsRow}</Row>
      </Container>

      <Container>
        <Row>{pointsToSelectRow}</Row>
      </Container>
      <Text style={styles.playerName}>Player name: {playerName}</Text>
    </View>
    <Footer />
    </>
  )
}
