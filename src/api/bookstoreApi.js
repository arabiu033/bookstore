import axios from 'axios';

const http = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

const ID = 'fKexWRx5HrkWwPJlCVaZ';

const create = () => http.post('/apps/');

const update = (book) => http.post('/apps/fKexWRx5HrkWwPJlCVaZ/books', book);

const getAll = (id = ID) => http.get(`/apps/${id}/books`);

const remove = (bookId) => http.delete(`/apps/${ID}/books/${bookId}`);

const api = {
  create,
  update,
  getAll,
  remove,
};

// console.log(getAll());
export default api;
