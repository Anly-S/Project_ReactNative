import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ScanCameraComponent = () => {
  return (
    <View style={styles.scanContainer}>
      <View style={styles.scanBackground}></View>
      <Image
        source={require('../assets/scan.png')}
        style={styles.scanIcon}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  scanContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '77%',
  },
  scanBackground: {
    position: 'absolute',
    borderRadius: 15,
    height: 55,
    width: 55,
    backgroundColor: '#A1D5E3',
  },
  scanIcon: {
    zIndex: 1,
    height: 30,
    width: 30,
    position: 'relative',
  },
});

export default ScanCameraComponent;
