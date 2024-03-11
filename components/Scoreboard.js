import React from 'react';
import { Text, View } from 'react-native';
import style from '../style/style';
import Metrics from "../style/Metrics";

const Scoreboard = ({ playerName, totalPoints }) => {
  return (
    <View>
      <Text>Player Name: {playerName}</Text>
      <Text>Total Points: {totalPoints}</Text>
    </View>
  );
};

export default Scoreboard;
