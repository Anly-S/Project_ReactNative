import api from './Api';

interface ContactProp {
  user_id: string;
  token: string;
  card_id: string;
}

interface ContactResponse {
  statusCode: string;
  contactResp: any;
}

export async function listContacts({
  user_id,
  token,
  card_id,
}: ContactProp): Promise<ContactResponse> {
  let statusCode: string = '';
  let contactResp: any = '';

  const ContactPayload = {
    user_id: user_id,
    card_id: card_id,
  };
  console.log(ContactPayload);
  try {
    const ContactResponse = await api.get('api/v1/getContactList', {
      params: ContactPayload,
      headers: {Authorization: `Bearer ${token}`},
    });
    statusCode = ContactResponse.status.toString();

    contactResp = ContactResponse.data;
    // console.log(contactResp);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    //   errorMessage = error.message;
  }

  return {statusCode, contactResp};
}
