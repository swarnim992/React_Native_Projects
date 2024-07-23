

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 

function App():  JSX.Element{

  const [bfColor , setBgColor] = useState('#000000');
  const [bfColorBtn , setBgColorBtn] = useState('#087509');
 
  const generateColor = ()=>{
    const hexColor = '0123456789ABCDEF';
    let color = '#';

    for(let i=0;i<6;i++){
      color += hexColor[Math.floor(Math.random() * 16)];
    }

    setBgColor(color);
    generateColorBtn();
  }

  const generateColorBtn = ()=>{
    const hexColor = '0123456789ABCDEF';
    let color = '#';

    for(let i=0;i<6;i++){
      color += hexColor[Math.floor(Math.random() * 16)];
    }

    setBgColorBtn(color);
  }

  return (
    <>
      <View style= {[{backgroundColor: bfColor},styles.mainContainer]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={[styles.myButton , {backgroundColor : bfColorBtn}]}>
            <Text style={styles.buttonTxt}>Click ME</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  myButton: {
    padding: 40,
    backgroundColor: '#Af7878',
    borderRadius: 12,
  },
  buttonTxt:{
    fontSize: 20,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }

});

export default App;
