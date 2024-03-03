import React, {ReactNode} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import colors from '../utils/colorPallette';

interface CardDetailProps {
  children: ReactNode;
  title: string;
}

const CardDetailComponent: React.FC<CardDetailProps> = ({children, title}) => {
  return (
    <View style={styles.cardDetailContainer}>
      <View style={styles.iconTextWrapper}>
        <View style={styles.iconBg}>{children}</View>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardDetailContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconBg: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E8EDF2',
  },
  cardText: {
    fontSize: 22,
    color: colors['primary-text'],
    marginLeft: 10,
  },
});

export default CardDetailComponent;
