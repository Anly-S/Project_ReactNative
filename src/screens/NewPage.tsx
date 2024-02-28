import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const NewPage = () => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 20000);
  }, []);
  return (
    <View style={styles.container}>
      <ShimmerPlaceholder
        LinearGradient={LinearGradient}
        visible={isLoading}
        style={{width: 100, height: 100}}>
        <Text>I am loading</Text>
      </ShimmerPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default NewPage;
