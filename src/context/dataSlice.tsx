import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  status: boolean;
  token: string;
  user_id: string;
  message: string;
}
const initialState: UserState = {
  status: false,
  token: '',
  user_id: '',
  message: '',
};
export const dataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userData(state: UserState, action: PayloadAction<UserState>) {
      state.status = action.payload.status;
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
      state.message = action.payload.message;
    },
  },
});

export const {userData} = dataSlice.actions;
export default dataSlice.reducer;
