import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/bookstoreApi';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH = 'bookstore/books/FETCH';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH: return [...action.payload];
    case ADD: return [...state, action.payload];
    case REMOVE: return state.filter((f) => f.item_id !== action.payload);
    default: return state;
  }
};

export const fetchBooks = createAsyncThunk('fetchbooks/get', async (_, thunkApi) => {
  const res = await api.getAll();

  if (res.data) {
    thunkApi.dispatch({
      type: FETCH,
      payload: Object.entries(res.data).map(([k, v]) => ({ item_id: k, ...v[0] })),
    });
  }
});

export const add = (payload) => async (dispatch) => {
  await api.update(payload);
  dispatch({ type: ADD, payload });
};

export const remove = (payload) => async (dispatch) => {
  await api.remove(payload);
  dispatch({ type: REMOVE, payload });
};
