import api from './Api';

interface ContactProp {
  user_id: string;
  token: string;
  card_id: string;
}

interface CardResponse {
  statusCode: string;
  cardResp: any;
}

export async function listCards({
  user_id,
  token,
  card_id,
}: ContactProp): Promise<CardResponse> {
  let statusCode: string = '';
  let cardResp: any = '';

  const ViewCardPayload = {
    user_id: user_id,
    card_id: card_id,
  };
  console.log(ViewCardPayload);
  try {
    const CardResponse = await api.get('api/v1/getCardList', {
      params: ViewCardPayload,
      headers: {Authorization: `Bearer ${token}`},
    });
    statusCode = CardResponse.status.toString();

    cardResp = CardResponse.data;
  } catch (error: any) {
    console.log('Error while logging in:', error);
  }

  return {statusCode, cardResp};
}
