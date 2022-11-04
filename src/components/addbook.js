import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Add = (props) => {
  const [inputBook, setInputText] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { handleBooks } = props;
    if (inputBook.title.trim() && inputBook.author.trim()) {
      handleBooks(inputBook.title, inputBook.author);
    }
  }

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} >
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
        <button className="input-submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

Add.propTypes = {
  handleBooks: PropTypes.func.isRequired,
}

export default Add;
