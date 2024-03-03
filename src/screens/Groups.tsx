import React, {useEffect, useState} from 'react';
import colors from '../utils/colorPallette';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Contacts from '../screens/Contacts.tsx';
import CardDetailComponent from '../components/CardDetailComponent';
import BackButtonIcon from '../assets/images/backButton.svg';
import DeleteIcon from '../assets/images/deleteIcon.svg';
import ShareIcon from '../assets/images/shareIcon.svg';
import CompanyIcon from '../assets/images/companyIcon.svg';
import PhoneIcon from '../assets/images/phoneIcon.svg';
import MailIcon from '../assets/images/mailIcon.svg';
import WebsiteIcon from '../assets/images/websiteIcon.svg';
import CommonImageComponent from '../components/CommonImageComponent';
import ProfileButtonComponent from '../components/ProfileButtonComponents';
import MainButtonComponent from '../components/MainButtonComponent';
import {getItem} from '../utils/Utils';
import Constants from '../utils/Constants';
import {listCardDetails} from '../networks/ViewCardApi';
import ContactsScreen from './Contacts';
import {useNavigation} from '@react-navigation/native';

const CardDetailsScreen = () => {
  const [cardDetails, setCardDetails] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = (await getItem(Constants.USER_DATA)) ?? '{}';
        const userDataParsed = JSON.parse(userData);
        const userId = userDataParsed.user_id;
        const token = userDataParsed.token;
        const {cardDetailsResp} = await listCardDetails({
          user_id: userId,
          token: token,
          card_id: 'c05',
        });
        setCardDetails(cardDetailsResp.data);
        // console.log('From Groups', cardDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.navigate('Contacts' as never);
        }}>
        <BackButtonIcon />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <CommonImageComponent />
      </View>
      <View style={styles.conatctHead}>
        <Text style={styles.cardName}>{cardDetails.card_name}</Text>
        <Text style={styles.jobTitle}>{cardDetails.job_title}</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonTitle}>Translate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonTitle}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardDetailsContainer}>
        <CardDetailComponent title={cardDetails.company_name}>
          <CompanyIcon width={20} height={20} />
        </CardDetailComponent>
        <CardDetailComponent title={cardDetails.phone}>
          <PhoneIcon width={20} height={20} />
        </CardDetailComponent>
        <CardDetailComponent title={cardDetails.email}>
          <MailIcon width={20} height={20} />
        </CardDetailComponent>
        <CardDetailComponent title={cardDetails.company_website}>
          <WebsiteIcon width={20} height={20} />
        </CardDetailComponent>
      </View>
      <View style={styles.editButtons}>
        <View style={styles.buttonContainer}>
          <ProfileButtonComponent
            children={<DeleteIcon width={40} height={25} />}
            title={'Delete'}
            proButtonBgColor={'#FFF'}
            proButtonTextColor={colors['primary-danger']}
            onPressing={function () {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <MainButtonComponent
            children={<ShareIcon width={40} height={25} />}
            title={'Share'}
            onPressing={function () {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    color: colors['primary-text'],
    flex: 1,
  },
  conatctHead: {
    flexDirection: 'column',
    // marginTop: '3%',
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardName: {
    fontSize: 35,
    fontWeight: '700',
    color: colors['primary-text'],
  },
  jobTitle: {
    color: '#565656',
    fontSize: 24,
  },
  cardDetailsContainer: {
    backgroundColor: colors['secondary-light'],
    marginLeft: 30,
    alignItems: 'stretch',
    marginBottom: 10,
  },
  imageContainer: {
    width: 400,
    height: 250,
    backgroundColor: '#FFF',
    marginTop: 25,
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFF',
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 10,
  },
  text: {
    color: colors['primary-text'],
    fontSize: 40,
  },
  cardButton: {
    alignItems: 'center',
    backgroundColor: '#E8EDF2',
    height: 50,
    width: 30,
    borderRadius: 8,
    flex: 0.5,
    padding: 10,
    fontWeight: '700',
    justifyContent: 'center',
    marginRight: 10,
  },
  cardButtonTitle: {
    fontWeight: 'bold',
    color: colors['primary-text'],
    alignSelf: 'center',
    fontSize: 18,
  },
  editButtons: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    gap: 10,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainer: {
    width: '48%',
  },
  backButton: {
    width: '100%',
    marginTop: 20,
    marginLeft: 20,
  },
});

export default CardDetailsScreen;
// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import GroupComponent from '../components/GroupComponent';
// import ScanCameraComponent from '../components/ScanCameraComponent';
// const GroupsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.groupsHead}>Groups</Text>
//       <GroupComponent
//         title={'Mistubishi Motors'}
//         bgColor="#FF6767"
//         noOfContacts="8"
//       />
//       <GroupComponent title={'Kenwoods'} bgColor="#FFCB67" noOfContacts="5" />
//       <GroupComponent
//         title={'Honda Electrics'}
//         bgColor="#FF7D54"
//         noOfContacts="4"
//       />
//       <View style={styles.scan}>
//         <ScanCameraComponent />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     padding: 20,
//     paddingTop: '15%',
//     paddingBottom: '8%',
//     backgroundColor: '#FFFF',
//     paddingLeft: 25,
//     paddingRight: 25,
//     width: '100%',
//     height: '100%',
//   },
//   groupsHead: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#000',
//     paddingBottom: 20,
//   },
//   scan: {
//     marginTop: '40%',
//   },
// });

// export default GroupsScreen;
