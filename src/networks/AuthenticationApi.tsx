import api from './Api';

interface LogInUserProp {
  loginUsername: string;
  loginPassword: string;
}

interface LoginUserResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  loginResp: any;
}

export async function loginUser({
  loginUsername,
  loginPassword,
}: LogInUserProp): Promise<LoginUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let loginResp: any;

  const logInPayload = {
    user_email: loginUsername,
    password: loginPassword,
  };

  try {
    const logInResponse = await api.post('/userLogin', logInPayload);
    statusCode = logInResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    loginResp = logInResponse.data;
    console.log(loginResp);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }

  return {success, statusCode, loginResp, errorMessage};
}
