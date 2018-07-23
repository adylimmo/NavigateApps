import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { Actions } from 'react-native-router-flux';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>Actions.about()}
                >To About Click here</Text>
                <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.flexib}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    flexib: {
      flex: 1,
      width: '100%',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
export default Home;