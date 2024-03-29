import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PersonIcon from '../assets/images/person.svg';
import PhoneIcon from '../assets/images/phoneIcon.svg';
import MailIcon from '../assets/images/mailIcon.svg';
import CompanyIcon from '../assets/images/companyIcon.svg';
import ArrowIcon from '../assets/images/Arrow.svg';
import colors from '../utils/colorPallette';
import {useNavigation} from '@react-navigation/native';

interface Prop {
  name: string;
  job_position: string;
  email: string;
  phone_number: string;
  company_name: string;
  alignToSides: boolean;
  card_id: string;
}

// type Card = {card_name:string,job_role:string,email:string,company_name:string}
const CardComponent: React.FC<Prop> = ({
  alignToSides,
  name,
  job_position,
  email,
  phone_number,
  company_name,
  card_id,
}): JSX.Element => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CardDetailsScreen', {card_id: card_id});
  };
  return (
    <View style={styles.card_container}>
      <View
        style={[
          styles.first_row,
          alignToSides
            ? {justifyContent: 'space-between'}
            : {justifyContent: 'center'},
        ]}>
        <Text style={styles.card_name}>{name}</Text>
        {alignToSides && (
          <TouchableOpacity style={styles.card_button} onPress={handlePress}>
            <Text style={styles.button_text}>View Card</Text>
            <ArrowIcon width={10} height={10} fill={'black'}></ArrowIcon>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.second_row}>
        <View style={styles.sr1}>
          <PersonIcon width={14} height={14} fill={'black'} />
          <Text style={styles.job_position}>{job_position}</Text>
        </View>
        <View style={styles.sr2}>
          <PhoneIcon width={14} height={14} fill={'white'}></PhoneIcon>
          <Text style={styles.phone_number}>{phone_number}</Text>
        </View>
      </View>
      <View style={styles.third_row}>
        <View style={styles.tr1}>
          <MailIcon width={14} height={14} fill={'white'}></MailIcon>
          <Text style={styles.mail_text}>{email}</Text>
        </View>
        <View style={styles.tr2}>
          <CompanyIcon width={14} height={14} fill={'white'}></CompanyIcon>
          <Text style={styles.company_name}>{company_name}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card_container: {
    height: 170,
    paddingHorizontal: 30,
    backgroundColor: colors['secondary-light'],
    borderRadius: 10,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  first_row: {
    flexDirection: 'row',
    flex: 2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  second_row: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 10,
    gap: 10,
  },
  third_row: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 20,
    gap: 10,
    marginBottom: 10,
  },
  card_name: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'black',
  },
  sr1: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors['accent-white'],
    height: 33,
    alignItems: 'center',
  },
  job_position: {
    fontFamily: 'Roboto',
    fontSize: 12,
    marginRight: 40,
    color: '102D4A',
    marginLeft: 10,
  },
  sr2: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors['accent-white'],
    height: 33,
    alignItems: 'center',
  },
  tr1: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors['accent-white'],
    height: 33,
    alignItems: 'center',
  },
  tr2: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors['accent-white'],
    height: 33,
    alignItems: 'center',
  },
  phone_number: {
    fontFamily: 'Roboto',
    fontSize: 12,
    marginLeft: 10,
  },
  mail_text: {
    fontSize: 12,
    fontFamily: 'Roboto',
    marginRight: 40,
    marginLeft: 10,
  },
  company_name: {
    fontSize: 12,
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  card_button: {
    backgroundColor: colors['primary-accent'],
    borderRadius: 8,
    height: 25,
    width: 81,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  button_text: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: colors['primary-text'],
    fontWeight: '500',
    marginRight: 0,
  },
});
export default CardComponent;
