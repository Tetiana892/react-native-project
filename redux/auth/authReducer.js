import {createSlice} from '@reduxjs/toolkit';

const state = {
    userId: null,
    login: null,
    email: null,
    stateChange: false,
    avatarImage: null,
  };

export const authSlice = createSlice({
    name: 'auth',
    initialState: state,
    reducers:{

    }
}
)