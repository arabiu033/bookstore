import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import api from '../../api/bookstoreApi';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH = 'bookstore/books/FETCH';

const initialState = [
  {
    item_id: uuidv4(), title: 'The Hunger Games', author: 'Suzanne Collins',
  },
  {
    item_id: uuidv4(), title: 'Dune', author: 'Frank Herbert',
  },
  {
    item_id: uuidv4(), title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH: return [...state, ...action.payload];
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
