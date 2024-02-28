import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.contactContainer}>
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={styles.profileIcon}></ShimmerPlaceholder>
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={styles.contactName}></ShimmerPlaceholder>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: '3%',
  },
  contactName: {
    fontWeight: 'normal',
    marginLeft: 10,
    color: 'black',
    fontSize: 22,
  },
  profileIcon: {
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ShimmerComponent;
