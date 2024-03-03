import api from './Api';

interface CardDetailsProp {
  user_id: string;
  token: string;
  card_id: string;
}

interface CardDetailsResponse {
  statusCode: string;
  cardDetailsResp: any;
}

export async function listCardDetails({
  user_id,
  token,
  card_id,
}: CardDetailsProp): Promise<CardDetailsResponse> {
  let statusCode: string = '';
  let cardDetailsResp: any = '';

  const CardDetailPayload = {
    user_id: user_id,
    card_id: card_id,
  };
  console.log(CardDetailPayload);
  try {
    const CardDetailsResponse = await api.get('api/v1/getCardDetails', {
      params: CardDetailPayload,
      headers: {Authorization: `Bearer ${token}`},
    });
    statusCode = CardDetailsResponse.status.toString();

    cardDetailsResp = CardDetailsResponse.data;
    // console.log('Calling  from getCardList', cardDetailsResp);
  } catch (error: any) {
    console.log('Error while logging in:', error);
  }

  return {statusCode, cardDetailsResp};
}
//card_name
// job_title;
// email;
// phone;
// company_name;
// company_website;
