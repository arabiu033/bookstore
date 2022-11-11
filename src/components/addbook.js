import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { add } from '../redux/books/book';
import styles from '../css/addBook.module.css';

const Add = () => {
  const [inputBook, setInputText] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();
  const getBook = (title, author) => ({
    item_id: uuidv4(), title, author, category: 'Fiction',
  });

  const onChange = (e) => {
    setInputText({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputBook.title.trim() && inputBook.author.trim()) {
      dispatch(add(getBook(inputBook.title, inputBook.author)));
      setInputText({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <h2 className={styles.header}>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Book title"
          value={inputBook.title}
          name="title"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Book author"
          value={inputBook.author}
          name="author"
          onChange={onChange}
        />
        <button className={styles.addButton} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Add;
