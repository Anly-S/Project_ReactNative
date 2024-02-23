import api from './Api';

interface SignUpUserProp {
  signupFullname: string;
  signupEmail: string;
  signupPassword: string;
}

interface SignUpUserResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  signupResp: any;
}

export async function signupUser({
  signupFullname,
  signupEmail,
  signupPassword,
}: SignUpUserProp): Promise<SignUpUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let signupResp: any;

  const signupPayload = {
    user_fullname: signupFullname,
    user_email: signupEmail,
    password: signupPassword,
  };

  try {
    const signupResponse = await api.post('/userRegistration', signupPayload);
    statusCode = signupResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    signupResp = signupResponse.data;
    console.log(signupResp);
  } catch (error: any) {
    console.log('Error while sign up:', error);
    errorMessage = error.message;
  }

  return {success, statusCode, signupResp, errorMessage};
}
