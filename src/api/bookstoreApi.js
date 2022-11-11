import axios from 'axios';

const http = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

// const ID = 'fKexWRx5HrkWwPJlCVaZ';

const create = () => http.post('/apps/');

const update = (book) => http.post('/apps/fKexWRx5HrkWwPJlCVaZ/books', book);

const getAll = () => http.get('/apps/fKexWRx5HrkWwPJlCVaZ/books');

const remove = (bookId) => http.delete(`/apps/fKexWRx5HrkWwPJlCVaZ/books/${bookId}`);

const api = {
  create,
  update,
  getAll,
  remove,
};

export default api;
