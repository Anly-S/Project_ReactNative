// import api from './Api';

// interface ProfileProp {
//   userId: string;
//   jwttoken: string;
// }

// interface ProfileResponse {
//   success: boolean;
//   errorMessage: string;
//   statusCode: string;
//   profileResp: any;
// }

// export async function profileData({
//   userId,
//   jwttoken,
// }: ProfileProp): Promise<ProfileResponse> {
//   let success: boolean = false;
//   let errorMessage: string = '';
//   let statusCode: string = '';
//   let profileResp: any = '';

//   const profilePayload = {
//     userId: userId,
//     jwttoken: jwttoken,
//   };

//   try {
//     const profileResponse = await api.get('api/v1/getProfile', {
//       params: profilePayload,
//       headers: {Authorization: `Bearer ${jwttoken}`},
//     });
//     statusCode = profileResponse.status.toString();
//     {
//       statusCode === '200' ? (success = true) : (success = false);
//     }
//     profileResp = profileResponse.data;
//     console.log(profileResp);
//   } catch (error: any) {
//     console.log('Error while logging in:', error);
//     errorMessage = error.message;
//   }

//   return {
//     success,
//     errorMessage,
//     statusCode,
//     profileResp,
//   };
// }
