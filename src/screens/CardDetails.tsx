// import React from 'react';
// import colors from '../utils/colorPallette';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import CardDetailComponent from '../components/CardDetailComponent';
// import BackButtonIcon from '../assets/images/backButton.svg';
// import DeleteIcon from '../assets/images/deleteIcon.svg';
// import ShareIcon from '../assets/images/shareIcon.svg';
// import CompanyIcon from '../assets/images/companyIcon.svg';
// import PhoneIcon from '../assets/images/phoneIcon.svg';
// import MailIcon from '../assets/images/mailIcon.svg';
// import WebsiteIcon from '../assets/images/websiteIcon.svg';
// import CommonImageComponent from '../components/CommonImageComponent';
// import ProfileButtonComponent from '../components/ProfileButtonComponents';
// import MainButtonComponent from '../components/MainButtonComponent';
// const CardDetailsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.backButton}>
//         <BackButtonIcon />
//       </View>
//       <View style={styles.imageContainer}>
//         <CommonImageComponent />
//       </View>
//       <View style={styles.conatctHead}>
//         <Text style={styles.cardName}>Makoto Shinkai</Text>
//         <Text style={styles.jobTitle}>Systems Architect</Text>
//         <View style={styles.buttonWrapper}>
//           <TouchableOpacity style={styles.cardButton}>
//             <Text style={styles.cardButtonTitle}>Translate</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.cardButton}>
//             <Text style={styles.cardButtonTitle}>Edit</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.cardDetailsContainer}>
//         <CardDetailComponent title={'Tech Company'}>
//           <CompanyIcon width={20} height={20} />
//         </CardDetailComponent>
//         <CardDetailComponent title={'+1 123 456 7890'}>
//           <PhoneIcon width={20} height={20} />
//         </CardDetailComponent>
//         <CardDetailComponent title={'mike@techcompany.com'}>
//           <MailIcon width={20} height={20} />
//         </CardDetailComponent>
//         <CardDetailComponent title={'mike@techcompany.com'}>
//           <WebsiteIcon width={20} height={20} />
//         </CardDetailComponent>
//       </View>
//       <View style={styles.editButtons}>
//         <View style={styles.buttonContainer}>
//           <ProfileButtonComponent
//             children={<DeleteIcon width={40} height={25} />}
//             title={'Delete'}
//             proButtonBgColor={'#FFF'}
//             proButtonTextColor={colors['primary-danger']}
//             onPressing={function () {
//               throw new Error('Function not implemented.');
//             }}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <MainButtonComponent
//             children={<ShareIcon width={40} height={25} />}
//             title={'Share'}
//             onPressing={function () {
//               throw new Error('Function not implemented.');
//             }}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFF',
//     color: colors['primary-text'],
//     flex: 1,
//   },
//   conatctHead: {
//     flexDirection: 'column',
//     marginTop: '3%',
//     marginBottom: '8%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardName: {
//     fontSize: 35,
//     fontWeight: '700',
//     color: colors['primary-text'],
//   },
//   jobTitle: {
//     color: '#565656',
//     fontSize: 24,
//   },
//   cardDetailsContainer: {
//     backgroundColor: colors['secondary-light'],
//     paddingLeft: 30,
//     alignItems: 'stretch',
//   },
//   imageContainer: {
//     width: 400,
//     height: 250,
//     backgroundColor: '#FFF',
//     marginTop: 30,
//   },
//   buttonWrapper: {
//     flexDirection: 'row',
//     width: '100%',
//     backgroundColor: '#FFF',
//     paddingLeft: 50,
//     paddingRight: 50,
//     marginTop: 10,
//   },
//   text: {
//     color: colors['primary-text'],
//     fontSize: 40,
//   },
//   cardButton: {
//     alignItems: 'center',
//     backgroundColor: '#E8EDF2',
//     height: 50,
//     width: 30,
//     borderRadius: 8,
//     flex: 0.5,
//     padding: 10,
//     fontWeight: '700',
//     justifyContent: 'center',
//     marginRight: 10,
//   },
//   cardButtonTitle: {
//     fontWeight: 'bold',
//     color: colors['primary-text'],
//     alignSelf: 'center',
//     fontSize: 18,
//   },
//   editButtons: {
//     flexDirection: 'row',
//     backgroundColor: '#FFF',
//     marginTop: '5%',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap',
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
//   buttonContainer: {
//     width: '48%',
//   },
//   backButton: {
//     width: '100%',
//     marginTop: 20,
//     marginLeft: 20,
//   },
// });

// export default CardDetailsScreen;
