const STATUS = 'bookstore/categories/STATUS';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case STATUS: return 'Under Construction';
    default: return state;
  }
};

export const status = () => ({ type: STATUS });
