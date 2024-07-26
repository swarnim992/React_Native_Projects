import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';



function App(): React.JSX.Element {
  const [title,setTitle] = useState('')
  const [matrix, setMatrix] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  const [toReset, setToReset] = useState(false)
  const [playerTurn, setPlayerTurn] = useState('O')
  const [winner, setWinner] = useState(false)
  var ind = [0,1,2]
  
  const onClick = ( col: Int32 , row: Int32) =>{

    console.log('hello')
    var temp = matrix;

    temp[col][row] = playerTurn==='O'? 1: 2

    setMatrix(temp)

    if(temp[0][0]===temp[0][1] && temp[0][1]===temp[0][2] && temp[0][2]!==0 ){
      setWinner(true)
      return
    }

    if(temp[1][0]===temp[1][1] && temp[1][1]===temp[1][2] && temp[1][2]!==0 ){
      setWinner(true)
      return
    }

    if(temp[2][0]===temp[2][1] && temp[2][1]===temp[2][2] && temp[2][2]!==0 ){
      setWinner(true)
      return
    }

    if(temp[0][0]===temp[1][1] && temp[1][1]===temp[2][2] && temp[2][2]!==0 ){
      setWinner(true)
      return
    }

    if(temp[0][0]===temp[1][0] && temp[1][0]===temp[2][0] && temp[2][0]!==0 ){
      setWinner(true)
      return
    }

    if(temp[0][1]===temp[1][1] && temp[1][1]===temp[2][1] && temp[2][1]!==0 ){
      setWinner(true)
      return
    }

    if(temp[0][2]===temp[1][2] && temp[1][2]===temp[2][2] && temp[2][2]!==0 ){
      setWinner(true)
      return
    }

    if(temp[0][2]===temp[1][1] && temp[1][1]===temp[2][0] && temp[2][0]!==0 ){
      setWinner(true)
      return
    }

    var turn = playerTurn==='O'? 'X': 'O'
    // var turn ='X'
    setPlayerTurn(turn)
  }

  const demo = ( matIndex: Int32) => {
    var temp =[]

    var c = matIndex;

    for(let i=0;i<3;i++){
      temp.push(
        <View key={c+i}>
          <Pressable style={
            [
              styles.matrixContiner ,
              {backgroundColor: matrix[c][i]=== 0 ? 
                '#333333' 
                : matrix[c][i]=== 1 ? '#e4dd8c' : '#a3dfec'
              }
            ]
            }
            onPress={()=>onClick(c,i)}
          >
          <Text style={[styles.matrixTxt, {
            color: matrix[c][i]=== 0 ? 
            '#cebebe' 
            : matrix[c][i]=== 1 ? '#928704' : '#078daa'
          }]}>
            {matrix[c][i]=== 0 ? 
            '✒️' 
            : matrix[c][i]=== 1 ? 'O' : 'X'}
          </Text>
          </Pressable>
        </View>
      );
    }

    return temp
  }
  return (
    <SafeAreaView >
      <StatusBar></StatusBar>

      <View>
        <View style={[styles.playerContainer , {backgroundColor: playerTurn==='O'? '#ffeb00' : '#00d1ff'}]}>
          <Text style={styles.playerText}>
            Player {playerTurn}'s Turn
          </Text>
        </View>
        <View style={styles.mainCantainer}>
          {/* {demo(1)} */}
          <FlatGrid 
          itemDimension={100}
          data={ind}
          spacing={0}
          renderItem={({item})=>(
            <View>
              {demo(item)}
            </View>
          )}
          />
        </View>
        <View>
          {winner && (
            <View style={styles.winnerContainer}>
              <Text style={styles.winnerTxt}>
                Game Over Winner is {playerTurn} 🥳
              </Text>
            </View>)}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  winnerContainer:{
    margin: 20,
    height: 40,
    alignItems: 'center'
  },
  winnerTxt:{
    fontSize: 20,
    color: '#000000'
  },
  matrixContiner:{
    height: 50,
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center'
  },
  matrixTxt:{
    fontSize: 15,
  },
  mainCantainer:{
    // flex:1,
    margin:20,
    flexDirection:'row'
  },
  playerContainer: {
    height: 60,
    // width: 200,
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  playerText:{
    color: '#0036ff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;
